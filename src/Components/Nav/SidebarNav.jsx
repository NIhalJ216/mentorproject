import React from 'react';
import { Box } from '@mui/material';
import { red } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';

function SidebarNav() {
  const iconColor = red[50];
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: '#1B1A47',
        width: '6%',
        height: '39rem'
      }}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <HomeIcon sx={{ color: `${iconColor}` }} />
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <HomeIcon sx={{ color: `${iconColor}` }} />
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <HomeIcon sx={{ color: `${iconColor}` }} />
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <HomeIcon sx={{ color: `${iconColor}` }} />
          <a className="nav-link">Link</a>
        </li>
      </ul>
    </Box>
  );
}

export default SidebarNav;
