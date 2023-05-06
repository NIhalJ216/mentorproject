import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { COMPONENTS } from '../../Utils/Constants';
import { ROUTES } from '../../Routes/Paths';
import NoDataFound from '../NoDataFound/NoDataFound';
import RenderComponents from '../RenderComponents/RenderComponents';

function ClientGrid() {
  const navigate = useNavigate();
  const clients = useSelector((state) => state.ClientDetails?.clientInfo);
  const { SELECT_BOX, BUTTON } = COMPONENTS;
  const { CLIENTS, ADD_CLIENT } = ROUTES;
  const topComponents = [
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { paddingBottom: '0.5rem', marginBottom: '1rem' },
      key: 'clients',
      label: 'Clients',
      options: CLIENTS,
      isSelecteAllAllow: false,
      columnWidth: 2
    },
    {
      control: BUTTON,
      groupStyle: { position: 'absolute', right: '6rem', marginBottom: '1rem' },
      btnTitle: 'Add Client',
      handleClickButton: () => navigate(ADD_CLIENT),
      startIcon: <AddIcon />,
      columnWidth: 1.5
    }
  ];
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: '#f9fafc',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottom: '1px solid #e9e9e9',
          position: 'fixed',
          top: 0,
          height: '4rem',
          width: '100%',
          marginTop: '4rem'
        }}
      >
        {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: '#ffffff', height: '100vh ' }}>
        <NoDataFound />
      </Grid>
    </Grid>
  );
}

export default ClientGrid;
