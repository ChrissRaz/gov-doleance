import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CitizenForm from '../features/citizen/CitizenForm';
import CitizenSuccess from '../features/citizen/CitizenSuccess';
import Dashboard from '../features/president/Dashboard';
import SectorView from '../features/president/SectorView';
import SectorDetail from '../features/president/SectorDetail';
import Complaints from '../features/president/Complaints';
import Login from '../features/auth/Login';
import DesignSystemPreview from '../features/design/DesignSystemPreview';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CitizenForm />} />
        <Route path="/success" element={<CitizenSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/complaints" element={<Complaints />} />
        <Route path="/dashboard/sectors" element={<SectorView />} />
        <Route path="/dashboard/sector/:sectorName" element={<SectorDetail />} />
        {/* Redirection legacy /dashboard/stats vers la vue d'ensemble */}
        <Route path="/dashboard/stats" element={<Navigate to="/dashboard" replace />} />
        <Route path="/design-system" element={<DesignSystemPreview />} />
      </Routes>
    </BrowserRouter>
  );
}
