import { Routes, Route } from 'react-router-dom';
import AddClient from '../Components/Client/AddClient';
import ClientGrid from '../Components/Client/ClientGrid';
import Dashboard from '../Components/Dashboard/Dashboard';
import { ROUTES } from './Paths';

function RoutePaths() {
  const { DASHBOARD, CLIENTS, ADD_CLIENT } = ROUTES;
  return (
    <Routes>
      <Route path={DASHBOARD} element={<Dashboard />} />
      <Route path={CLIENTS} element={<ClientGrid />} />
      <Route path={ADD_CLIENT} element={<AddClient />} />
    </Routes>
  );
}

export default RoutePaths;
