const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Registration Schema
const registrationSchema = new mongoose.Schema({
    fullName: String,
    inGameName: String,
    playerId: String,
    mobileNumber: String,
    email: String,
    teamType: String,
    teamName: String,
    playerCount: String,
    paidEntry: Boolean,
    paymentMode: String,
    whatsappNumber: String,
    paymentScreenshot: String,
    agreeRules: Boolean,
    understandPrize: Boolean,
    registrationDate: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

app.use(cors({
    origin: '*', // Allow all origins for development/production (adjust as needed for security)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
        ['Full Name', 'In-Game Name', 'Player ID', 'Mobile Number', 'Email', 'Team Type', 'Team Name', 'Player Count', 'Paid Entry', 'Payment Mode', 'WhatsApp Number', 'Payment Screenshot', 'Agreed Rules', 'Understood Prize', 'Registration Date']
    ];
    const ws = xlsx.utils.aoa_to_sheet(headers);
    xlsx.utils.book_append_sheet(wb, ws, 'Registrations');
    xlsx.writeFile(wb, FILE_PATH);
    console.log('Created new registrations.xlsx file');
}

app.post('/register', upload.single('paymentScreenshot'), async (req, res) => {
    try {
        const formData = req.body;
        const file = req.file;
        
        // Save to MongoDB
        const newRegistration = new Registration({
            fullName: formData.fullName,
            inGameName: formData.inGameName,
            playerId: formData.playerId,
            mobileNumber: formData.mobileNumber,
            email: formData.email,
            teamType: formData.teamType,
            teamName: formData.teamName,
            playerCount: formData.playerCount,
            paidEntry: formData.paidEntry === 'true' || formData.paidEntry === true,
            paymentMode: formData.paymentMode,
            whatsappNumber: formData.whatsappNumber,
            paymentScreenshot: file ? file.filename : 'No file',
            agreeRules: formData.agreeRules === 'true' || formData.agreeRules === true,
            understandPrize: formData.understandPrize === 'true' || formData.understandPrize === true
        });

        await newRegistration.save();
        console.log('New registration saved to MongoDB:', formData.inGameName);

        // Also save to Excel as backup
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
            formData.agreeRules,
            formData.understandPrize,
            new Date().toLocaleString()
        ];

        const wb = xlsx.readFile(FILE_PATH);
        const ws = wb.Sheets['Registrations'];
        
        // Append data
        xlsx.utils.sheet_add_aoa(ws, [newRow], { origin: -1 });
        xlsx.writeFile(wb, FILE_PATH);
        
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error saving registration:', error);
        res.status(500).json({ message: 'Failed to save registration' });
    }
});

// Admin Login Endpoint
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Admin Get Registrations Endpoint
app.get('/admin/registrations', async (req, res) => {
    try {
        // Fetch from MongoDB
        const registrations = await Registration.find().sort({ registrationDate: -1 });
        
        // Transform data to match frontend expectation (similar to Excel structure for compatibility)
        const formattedData = registrations.map(reg => ({
            'Full Name': reg.fullName,
            'In-Game Name': reg.inGameName,
            'Player ID': reg.playerId,
            'Mobile Number': reg.mobileNumber,
            'Email': reg.email,
            'Team Type': reg.teamType,
            'Team Name': reg.teamName,
            'Player Count': reg.playerCount,
            'Paid Entry': reg.paidEntry,
            'Payment Mode': reg.paymentMode,
            'WhatsApp Number': reg.whatsappNumber,
            'Payment Screenshot': reg.paymentScreenshot,
            'Agreed Rules': reg.agreeRules,
            'Understood Prize': reg.understandPrize,
            'Registration Date': reg.registrationDate
        }));

        res.status(200).json(formattedData);
    } catch (error) {
        console.error('Error fetching registrations:', error);
        res.status(500).json({ message: 'Failed to fetch registrations' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
