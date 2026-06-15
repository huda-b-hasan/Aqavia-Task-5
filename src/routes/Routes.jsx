import { Routes, Route } from 'react-router-dom';
import ChooseDashBoard from '../Components/ChooseDashBoard';
import AdminDashBoard from '../Components/AdminDashboard';
import UserDashboard from '../Components/UserDashboard';



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChooseDashBoard />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/user" element={<UserDashboard />} />
    </Routes>
  );
}