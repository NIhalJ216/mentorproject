import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import GrainIcon from '@mui/icons-material/Grain';
import HoverNav from './HoverNav';
import { ROUTES } from '../../Routes/Paths';
import './SidebarNav.scss';

function SidebarNav() {
  const { CLIENTS } = ROUTES;
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <HoverNav openDrawer={openDrawer} handleDrawer={handleDrawer} />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          background: '#1B1A47',
          width: '100%',
          height: '39rem'
        }}
      >
        <ul className="nav flex-column">
          <li className="nav-item" onFocus={() => setOpenDrawer(true)} onBlur={() => setOpenDrawer(false)}>
            <GrainIcon className="iconStyles" />
            <Link to="/" className="nav-link active links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <HomeIcon className="iconStyles" />
            <Link to="/" className="nav-link active links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <PermIdentityIcon className="iconStyles" />
            <Link to="/" className="nav-link links">
              Self-service
            </Link>
          </li>
          <li className="nav-item">
            <EventAvailableIcon className="iconStyles" />
            <Link to="/" className="nav-link links">
              Attendance
            </Link>
          </li>
          <li className="nav-item">
            <AccessTimeIcon className="iconStyles" />
            <Link to={CLIENTS} className="nav-link links">
              Time Tracker
            </Link>
          </li>
          <li className="nav-item">
            <CampaignIcon className="iconStyles" />
            <Link to="/" className="nav-link links">
              Announcements
            </Link>
          </li>
          <li className="nav-item">
            <MoreHorizIcon className="iconStyles" />
            <Link to="/" className="nav-link links">
              More
            </Link>
          </li>
          <li className="nav-item">
            <PieChartOutlineIcon className="iconStyles" />
            <Link to="/" className="nav-link links">
              Reports
            </Link>
          </li>
        </ul>
      </Box>
    </div>
  );
}

export default SidebarNav;
