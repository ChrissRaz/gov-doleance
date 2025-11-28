import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import CitizenForm from '../features/citizen/CitizenForm';
import CitizenSuccess from '../features/citizen/CitizenSuccess';
import Dashboard from '../features/president/Dashboard';
import SectorView from '../features/president/SectorView';
import SectorDetail from '../features/president/SectorDetail';
import Complaints from '../features/president/Complaints';
import Settings from '../features/president/Settings';
import Login from '../features/auth/Login';
import DesignSystemPreview from '../features/design/DesignSystemPreview';
import PortalPage from '../features/portal/PortalPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/citoyens" element={<CitizenForm />} />
        <Route path="/citoyens/success" element={<CitizenSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portail" element={<PortalPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/complaints" element={<Complaints />} />
        <Route path="/dashboard/sectors" element={<SectorView />} />
        <Route path="/dashboard/sector/:sectorName" element={<SectorDetail />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        {/* Redirections legacy */}
        <Route path="/success" element={<Navigate to="/citoyens/success" replace />} />
        <Route path="/dashboard/stats" element={<Navigate to="/dashboard" replace />} />
        <Route path="/design-system" element={<DesignSystemPreview />} />
      </Routes>
    </BrowserRouter>
  );
}
