import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { SIDEBAR_MENU } from './SidebarMenu';
import { isArray } from '../../Utils/Utils';
import './SidebarNav.scss';

function SidebarNav({ handleHover }) {
  return (
    <Box className="wrapperBox">
      {isArray(SIDEBAR_MENU) &&
        SIDEBAR_MENU.map((itm) => (
          <List key={itm.title} component="nav">
            <ListItem className="reduceHeight" component={Link} to={itm.url} onClick={handleHover}>
              <ListItemButton className="listItmBtn">
                <ListItemIcon sx={{ ml: 3 }}>{itm.icon}</ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '0.68rem', color: '#ffebee' }} primary={itm.title} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
    </Box>
  );
}

export default SidebarNav;
