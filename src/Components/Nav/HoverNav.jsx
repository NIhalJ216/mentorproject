import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemButton, ListItemText, Collapse } from '@mui/material';

function HoverNav({ openDrawer, handleDrawer }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer open={openDrawer} onClose={handleDrawer} style={{ zIndex: '1' }}>
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
    </Drawer>
  );
}

export default HoverNav;
