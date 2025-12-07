import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import CitizenForm from '../features/citizen/CitizenForm';
import CitizenSuccess from '../features/citizen/CitizenSuccess';
import Dashboard from '../features/president/Dashboard';
import SectorView from '../features/president/SectorView';
import SectorDetail from '../features/president/SectorDetail';
import Complaints from '../features/president/Complaints';
import Regions from '../features/president/Regions';
import Actions from '../features/president/Actions';
import Settings from '../features/president/Settings';
import Login from '../features/auth/Login';
import DesignSystemPreview from '../features/design/DesignSystemPreview';
import PortalPage from '../features/portal/PortalPage';
import PresidentLayout from '../components/layout/PresidentLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/citoyens" element={<CitizenForm />} />
        <Route path="/citoyens/success" element={<CitizenSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portail" element={<PortalPage />} />

        {/* President Dashboard Routes with Sidebar */}
        <Route path="/president/dashboard" element={<PresidentLayout><Dashboard /></PresidentLayout>} />
        <Route path="/president/complaints" element={<PresidentLayout><Complaints /></PresidentLayout>} />
        <Route path="/president/sectors" element={<PresidentLayout><SectorView /></PresidentLayout>} />
        <Route path="/president/sector/:sectorName" element={<PresidentLayout><SectorDetail /></PresidentLayout>} />
        <Route path="/president/regions" element={<PresidentLayout><Regions /></PresidentLayout>} />
        <Route path="/president/actions" element={<PresidentLayout><Actions /></PresidentLayout>} />
        <Route path="/president/settings" element={<PresidentLayout><Settings /></PresidentLayout>} />

        {/* Legacy routes - redirect to new structure */}
        <Route path="/dashboard" element={<Navigate to="/president/dashboard" replace />} />
        <Route path="/dashboard/complaints" element={<Navigate to="/president/complaints" replace />} />
        <Route path="/dashboard/sectors" element={<Navigate to="/president/sectors" replace />} />
        <Route path="/dashboard/sector/:sectorName" element={<Navigate to="/president/sector/:sectorName" replace />} />
        <Route path="/dashboard/settings" element={<Navigate to="/president/settings" replace />} />
        <Route path="/dashboard/stats" element={<Navigate to="/president/dashboard" replace />} />

        {/* Other redirections */}
        <Route path="/success" element={<Navigate to="/citoyens/success" replace />} />
        <Route path="/design-system" element={<DesignSystemPreview />} />
      </Routes>
    </BrowserRouter>
  );
}
