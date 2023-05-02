import React from 'react';
import { Grid } from '@mui/material';
import SidebarNav from '../Nav/SidebarNav';
import TopNav from '../Nav/TopNav';
import RoutePaths from '../../Routes/RoutePaths';

function T1index() {
  return (
    <>
      <TopNav />
      <Grid container style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={0.8}>
              <SidebarNav />
            </Grid>
            <Grid item xs={11.2} sx={{ padding: '0.5rem' }}>
              <RoutePaths />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default T1index;
