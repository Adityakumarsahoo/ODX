import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, LogOut, Trophy, AlertCircle, Eye, X, Check } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    const fetchRegistrations = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/registrations`);
        if (response.ok) {
          const data = await response.json();
          setRegistrations(data);
        }
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-krafton-yellow uppercase tracking-widest">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-bold uppercase tracking-wider transition-colors w-full md:w-auto justify-center"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-gray-900 border border-white/10 p-4 md:p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-600/20 rounded-lg text-blue-500">
                <Users size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Registrations</p>
                <h3 className="text-xl md:text-2xl font-bold">{registrations.length}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-white/10 p-4 md:p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-600/20 rounded-lg text-green-500">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Tournaments</p>
                <h3 className="text-xl md:text-2xl font-bold">1</h3>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-white/10 p-4 md:p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-600/20 rounded-lg text-yellow-500">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Pending Verifications</p>
                <h3 className="text-xl md:text-2xl font-bold">{registrations.filter(r => !r['Paid Entry']).length}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
          <div className="p-4 md:p-6 border-b border-white/10">
            <h2 className="text-lg md:text-xl font-bold">Recent Registrations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Player Name</th>
                  <th className="p-4">In-Game Name</th>
                  <th className="p-4">Player ID</th>
                  <th className="p-4">Mobile</th>
                  <th className="p-4">WhatsApp</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Team Type</th>
                  <th className="p-4">Team Name</th>
                  <th className="p-4">Count</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {registrations.length > 0 ? (
                  registrations.map((reg, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-400 text-xs">
                        {new Date(reg['Registration Date']).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-medium">{reg['Full Name']}</td>
                      <td className="p-4 text-gray-400">{reg['In-Game Name']}</td>
                      <td className="p-4 font-mono text-xs text-krafton-yellow">{reg['Player ID']}</td>
                      <td className="p-4 text-gray-400">{reg['Mobile Number']}</td>
                      <td className="p-4 text-gray-400">{reg['WhatsApp Number']}</td>
                      <td className="p-4 text-gray-400 text-xs">{reg['Email']}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs font-bold rounded bg-blue-500/20 text-blue-400">
                          {reg['Team Type']}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400">{reg['Team Name'] || '-'}</td>
                      <td className="p-4 text-gray-400 text-center">{reg['Player Count']}</td>
                      <td className="p-4 text-gray-400">{reg['Payment Mode']}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${reg['Paid Entry'] ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {reg['Paid Entry'] ? 'PAID' : 'PENDING'}
                        </span>
                      </td>
                      <td className="p-4">
                        <button 
                          onClick={() => setSelectedRegistration(reg)}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-krafton-yellow"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="13" className="p-6 text-center text-gray-400">
                      No registrations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Registration Details Modal */}
      {selectedRegistration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/10 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in">
            <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-4 md:p-6 flex justify-between items-center z-10">
              <h2 className="text-xl md:text-2xl font-bold text-krafton-yellow uppercase tracking-wider">Registration Details</h2>
              <button 
                onClick={() => setSelectedRegistration(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Player Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">Full Name</label>
                      <p className="font-medium">{selectedRegistration['Full Name']}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">In-Game Name</label>
                      <p className="font-medium">{selectedRegistration['In-Game Name']}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">Player ID</label>
                      <p className="font-mono text-krafton-yellow">{selectedRegistration['Player ID']}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">Registration Date</label>
                      <p className="text-sm text-gray-400">{new Date(selectedRegistration['Registration Date']).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Contact Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">Email Address</label>
                      <p className="font-medium">{selectedRegistration['Email']}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 uppercase block mb-1">Mobile Number</label>
                        <p className="font-medium">{selectedRegistration['Mobile Number']}</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 uppercase block mb-1">WhatsApp Number</label>
                        <p className="font-medium">{selectedRegistration['WhatsApp Number']}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Team Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">Team Type</label>
                      <span className="px-2 py-1 text-xs font-bold rounded bg-blue-500/20 text-blue-400 inline-block">
                        {selectedRegistration['Team Type']}
                      </span>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-1">Player Count</label>
                      <p className="font-medium">{selectedRegistration['Player Count']}</p>
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs text-gray-500 uppercase block mb-1">Team Name</label>
                      <p className="font-medium text-lg">{selectedRegistration['Team Name'] || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Payment Verification</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <label className="text-xs text-gray-500 uppercase block mb-1">Payment Mode</label>
                        <p className="font-medium">{selectedRegistration['Payment Mode']}</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 uppercase block mb-1">Status</label>
                        <span className={`px-3 py-1 text-xs font-bold rounded ${selectedRegistration['Paid Entry'] ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {selectedRegistration['Paid Entry'] ? 'PAID & VERIFIED' : 'PENDING VERIFICATION'}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-xs text-gray-500 uppercase block mb-2">Transaction Screenshot</label>
                      <div className="bg-black/50 border border-white/10 rounded-lg p-2 flex items-center justify-center min-h-[300px]">
                        {selectedRegistration['Payment Screenshot'] && selectedRegistration['Payment Screenshot'] !== 'No file' ? (
                          <img 
                            src={`${process.env.REACT_APP_API_URL}/uploads/${selectedRegistration['Payment Screenshot']}`} 
                            alt="Payment Screenshot" 
                            className="max-w-full max-h-[400px] object-contain rounded"
                          />
                        ) : (
                          <div className="text-center text-gray-500">
                            <AlertCircle size={48} className="mx-auto mb-2 opacity-50" />
                            <p>No screenshot uploaded</p>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Filename: {selectedRegistration['Payment Screenshot']}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Terms & Verification</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-1 rounded-full ${selectedRegistration['Agreed Rules'] ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                        {selectedRegistration['Agreed Rules'] ? <Check size={16} /> : <X size={16} />}
                      </div>
                      <span className="text-sm font-medium">Agreed to Rules & Fair Play Policy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-1 rounded-full ${selectedRegistration['Understood Prize'] ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                        {selectedRegistration['Understood Prize'] ? <Check size={16} /> : <X size={16} />}
                      </div>
                      <span className="text-sm font-medium">Understood Prize Distribution</span>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="p-6 border-t border-white/10 bg-black/20 flex justify-end gap-4">
              <button 
                onClick={() => setSelectedRegistration(null)}
                className="px-6 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
