import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import SidebarNav from '../Nav/SidebarNav';
import TopNav from '../Nav/TopNav';
import RoutePaths from '../../Routes/RoutePaths';
import HoverNav from '../Nav/HoverNav';
import MuiLoader from '../Loader/MuiLoader';

function T1index() {
  const isDataLoading = useSelector((state) => state.MasterDataReducer?.isDataLoading);
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <MuiLoader open={isDataLoading} />
      <TopNav />
      <HoverNav hover={hover} setHover={setHover} />
      <Grid container style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={0.8}>
              <SidebarNav handleHover={handleHover} />
            </Grid>
            <Grid item xs={11.2} sx={{ padding: '0.5rem', width: '100%' }}>
              <RoutePaths />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default T1index;
