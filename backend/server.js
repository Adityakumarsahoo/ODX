const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const FILE_PATH = path.join(__dirname, 'registrations.xlsx');

// Ensure the file exists with headers if not
if (!fs.existsSync(FILE_PATH)) {
    const wb = xlsx.utils.book_new();
    const headers = [
        ['Full Name', 'In-Game Name', 'Player ID', 'Mobile Number', 'Email', 'Team Type', 'Team Name', 'Player Count', 'Paid Entry', 'Payment Mode', 'WhatsApp Number', 'Payment Screenshot', 'Registration Date']
    ];
    const ws = xlsx.utils.aoa_to_sheet(headers);
    xlsx.utils.book_append_sheet(wb, ws, 'Registrations');
    xlsx.writeFile(wb, FILE_PATH);
    console.log('Created new registrations.xlsx file');
}

app.post('/register', upload.single('paymentScreenshot'), (req, res) => {
    try {
        const formData = req.body;
        const file = req.file;
        
        const newRow = [
            formData.fullName,
            formData.inGameName,
            formData.playerId,
            formData.mobileNumber,
            formData.email,
            formData.teamType,
            formData.teamName,
            formData.playerCount,
            formData.paidEntry,
            formData.paymentMode,
            formData.whatsappNumber,
            file ? file.filename : 'No file',
            new Date().toLocaleString()
        ];

        const wb = xlsx.readFile(FILE_PATH);
        const ws = wb.Sheets['Registrations'];
        
        // Append data
        xlsx.utils.sheet_add_aoa(ws, [newRow], { origin: -1 });
        
        xlsx.writeFile(wb, FILE_PATH);
        
        console.log('New registration saved:', formData.inGameName);
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error saving registration:', error);
        res.status(500).json({ message: 'Failed to save registration' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
