import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { COMPONENTS } from '../../Utils/Constants';
import { CLIENTS_DATA } from '../../Utils/DataConstants';
import { ROUTES } from '../../Routes/Paths';
import { getApiData } from '../../Services/TestService';
import { getClientData, deleteClientData } from '../../Services/clientServices';
import MuiTable from '../MuiTable/MuiTable';
import NoDataFound from '../NoDataFound/NoDataFound';
import RenderComponents from '../RenderComponents/RenderComponents';

function ClientGrid() {
  // const clients = useSelector((state) => state.ClientDetails?.clientInfo);
  const navigate = useNavigate();
  const [clientData, setClientData] = useState([]);
  const { SELECT_BOX, BUTTON, ICON } = COMPONENTS;
  const { ADD_CLIENT } = ROUTES;
  const topComponents = [
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { paddingBottom: '0.5rem', marginBottom: '1rem' },
      key: 'clients',
      label: 'Clients',
      options: CLIENTS_DATA,
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

  const columnData = [
    { field: 'clientId', headerName: 'Id', width: 70 },
    { field: 'clientName', headerName: 'Client name', width: 130 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'currency', headerName: 'Currency', width: 100 },
    { field: 'billingMethod', headerName: 'Billing Method', width: 130 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'fax', headerName: 'Fax', width: 150 },
    {
      field: 'edit',
      headerName: '',
      width: 5,
      renderCell: (params) => (
        <div style={{ cursor: 'pointer' }}>
          <RenderComponents
            metaData={{
              control: ICON,
              iconName: <EditIcon />,
              tooltipTitle: 'Update',
              // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
              handleClickIcon: () => handleEdit(params.id)
            }}
          />
        </div>
      )
    },
    {
      field: 'delete',
      headerName: '',
      width: 5,
      renderCell: (params) => (
        <div style={{ cursor: 'pointer' }}>
          <RenderComponents
            metaData={{
              control: ICON,
              iconName: <DeleteIcon />,
              tooltipTitle: 'Delete',
              // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
              handleClickIcon: () => handleDelete(params.id)
            }}
          />
        </div>
      )
    }
  ];

  const handleEdit = (data) => {
    console.log('navigateData', data);
    const tableData = clientData.find((itm) => itm.clientId === data);
    console.log('tableData', tableData);
    navigate(ADD_CLIENT, { state: tableData });
  };

  const handleDelete = async (data) => {
    const res = await deleteClientData(data);
    if (res?.data.isSuccessful) {
      const tableData = clientData.filter((itm) => itm.clientId !== data);
      setClientData(tableData);
    }
  };

  const getRowId = (data) => {
    console.log('rowID', data.clientId);
    return data.clientId;
  };

  const getPOSTDATA = async () => {
    const res = await getClientData();
    console.log('RESPONCE', res?.data);
    if (res.data.isSuccessful) {
      setClientData(res.data.data);
    }
  };
  console.log('clientData', clientData);

  useEffect(() => {
    getPOSTDATA();
  }, []);

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
      <Grid item xs={12} style={{ height: '100vh ', marginTop: '5rem', backgroundColor: '#ffffff' }}>
        <MuiTable columnsData={columnData} rowsData={clientData} getRowId={getRowId} />
      </Grid>
      {/* <Grid item xs={12} style={{ backgroundColor: '#ffffff', height: '100vh ' }}>
        <NoDataFound />
      </Grid> */}
    </Grid>
  );
}

export default ClientGrid;
