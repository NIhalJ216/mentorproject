import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ROUTES } from '../../Routes/Paths';
import { COMPONENTS } from '../../Utils/Constants';
import zoho from '../../Assets/zoho.png';
import RenderComponents from '../RenderComponents/RenderComponents';

function TopNav() {
  const { TEXT_FIELD } = COMPONENTS;
  return (
    <AppBar
      elevation={0}
      position="static"
      style={{ borderBottom: '1px solid #e9e9e9', backgroundColor: 'white', height: '4rem' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ marginBottom: '1rem' }}>
          <img src={zoho} alt="zohoLogo" style={{ height: '3rem' }} />
          <Typography
            component={Link}
            to={ROUTES.DASHBOARD}
            variant="h5"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            People
          </Typography>
          <RenderComponents
            metaData={{
              control: TEXT_FIELD,
              groupStyle: { display: 'block', marginLeft: 'auto', marginRight: 'auto' },
              key: 'searchBox',
              variant: 'outlined',
              label: 'Search Employee',
              endAdornmentIcon: <SearchIcon />,
              columnWidth: 3
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNav;
