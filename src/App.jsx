import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import InvestorDashboard from './layouts/dashboardlayout';
import EntrepreneurDashboard from './layouts/investordashboard';
import InvestorProfile from './pages/InvestorProfile';
import EntrepreneurProfile from './pages/EntrepreneurProfile';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<login/>} />
      <Route path="/register" element={<register />} />
      <Route path="/dashboard/investor" element={<investordashboard />} />
      <Route path="/dashboard/entrepreneur" element={<entrepreneurdashboard />} />
      <Route path="/profile/investor/:id" element={<investorprofile />} />
      <Route path="/profile/entrepreneur/:id" element={<entrepreneurprofile />} />
    </Routes>
  );
}
