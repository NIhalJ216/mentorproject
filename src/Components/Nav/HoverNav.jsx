import React, { useState } from 'react';
import { Box, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import './HoverNav.scss';

function HoverNav({ hover }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className={hover ? 'sideBar' : 'closeSidebar'}>
      <List component="nav">
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Time Logs" />
        </ListItemButton>
        <Collapse in={open}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="List View" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Calendar View" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Timesheets" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Projects/Jobs" />
        </ListItemButton>
        <Collapse in={open}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Jobs" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Projects" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Clients" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default HoverNav;
