import React from 'react';
import { Grid } from '@mui/material';
import InnerNav from '../Nav/InnerNav';
import SidebarNav from '../Nav/SidebarNav';
import TopNav from '../Nav/TopNav';
import AddClient from '../ClientPage/AddClient';

function T1index() {
  return (
    <>
      <TopNav />
      <Grid style={{ display: 'flex', alignItems: 'flex-start' }}>
        <SidebarNav />
        <Grid>
          <InnerNav />
          <Grid style={{ padding: '0.5rem' }}>
            <AddClient />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default T1index;
