import React from 'react';
import { Grid, Typography } from '@mui/material';
import noRecordFound from '../../Assets/noRecordsFound.png';

function NoDataFound() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <img src={noRecordFound} alt="No Data Found" style={{ marginTop: '5rem', height: '200px', width: '250px' }} />
        <Typography variant="subtitle1" style={{ marginLeft: '2rem' }}>
          No Requests Submitted
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NoDataFound;
