import { Routes, Route } from 'react-router-dom';
import ChooseDashBoard from '../Components/ChooseDashBoard';
import AdminDashBoard from '../Components/AdminDashboard';
import UserDashboard from '../Components/UserDashboard';
import PrivateRoute from './PrivateRoute';
import Unauthorized from '../Components/Unauthorized';



export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<ChooseDashBoard />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route path="/admin" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashBoard/>
          </PrivateRoute>
        } />

        <Route path="/user" element={
          <PrivateRoute allowedRoles={['user']}>
            <UserDashboard/>
          </PrivateRoute>
        } />

    </Routes>
  );
}