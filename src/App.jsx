import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // ✅ capital L in filename!
import Register from './pages/Register'; // ✅
import InvestorDashboard from './layouts/InvestorDashboard'; // ✅ match filename
import EntrepreneurDashboard from './layouts/EntrepreneurDashboard'; // ✅ match filename
import InvestorProfile from './pages/InvestorProfile'; // ✅
import EntrepreneurProfile from './pages/EntrepreneurProfile'; // ✅

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} /> {/* ✅ capitalized */}
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/investor" element={<InvestorDashboard />} />
      <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
      <Route path="/profile/investor/:id" element={<InvestorProfile />} />
      <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
    </Routes>
  );
}
