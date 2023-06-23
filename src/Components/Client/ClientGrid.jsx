import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { COMPONENTS, clientsData, STATUS } from '../../Utils/Constants';
import { CLIENTS_DATA } from '../../Utils/DataConstants';
import { isArray } from '../../Utils/Utils';
import { ROUTES } from '../../Routes/Paths';
import { getApiData } from '../../Services/TestService';
import { getClientData, deleteClientData } from '../../Services/clientServices';
import MuiTable from '../MuiTable/MuiTable';
import NoDataFound from '../NoDataFound/NoDataFound';
import RenderComponents from '../RenderComponents/RenderComponents';
import { CLIENT_NAMES, IS_DATA_LOADING } from '../../Redux/Constants';
import DialogBox from '../DialogBox/DialogBox';
import AlertComponent from '../Alert/AlertComponent';

function ClientGrid() {
  // const clients = useSelector((state) => state.ClientDetails?.clientInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const masterData = useSelector((state) => state.MasterDataReducer);
  const handleActionDispatch = (type, data = []) => dispatch({ type, data });
  const [clientData, setClientData] = useState([]);
  const { SELECT_BOX, BUTTON, ICON } = COMPONENTS;
  const { ADD_CLIENT } = ROUTES;
  const [genericAlertBox, setShowGenericAlertBox] = useState({
    open: false,
    title: '',
    titleType: '',
    content: '',
    proceedAction: '',
    showProceedBtn: false,
    cancelButtonText: '',
    proceedButtonText: '',
    additionalInfoForProceed: null
  });
  const [alertBox, setAlertBox] = useState({
    alertOpen: false,
    alertType: '',
    message: ''
  });

  const topComponents = [
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { paddingBottom: '0.5rem', marginTop: '-1rem' },
      key: 'clients',
      label: 'Clients',
      options: masterData?.clientNameData,
      isSelecteAllAllow: false,
      columnWidth: 2
    },
    {
      control: BUTTON,
      groupStyle: { position: 'absolute', right: '1.5rem', marginTop: '-1rem' },
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
    { field: 'currencyId', headerName: 'Currency', width: 100 },
    { field: 'billingMethodId', headerName: 'Billing Method', width: 130 },
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
              color: 'primary',
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
              color: 'error',
              // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
              // handleClickIcon: () => handleDelete(params.id)
              handleClickIcon: () =>
                setShowGenericAlertBox({
                  open: true,
                  titleType: STATUS.WARNING,
                  title: 'Are you sure?',
                  content: 'Do you want to delete this data?',
                  showProceedBtn: true,
                  proceedAction: 'deleteRecord',
                  additionalInfoForProceed: params.id,
                  cancelButtonText: 'No',
                  proceedButtonText: 'Yes'
                })
            }}
          />
        </div>
      )
    }
  ];

  const handleEdit = (data) => {
    const tableData = clientData.find((itm) => itm.clientId === data);
    navigate(ADD_CLIENT, { state: tableData });
  };

  const handleDelete = async (data) => {
    setAlertBox({ alertOpen: true, alertType: STATUS.FAILED, message: 'Record deleted successfully.' });
    const res = await deleteClientData(data);
    if (res?.data.isSuccessful) {
      const tableData = clientData.filter((itm) => itm.clientId !== data);
      setClientData(tableData);
      setAlertBox({ alertOpen: true, alertType: STATUS.FAILED, message: 'Record deleted successfully.' });
    }
  };

  const getRowId = (data) => {
    console.log('rowID', data.clientId);
    return data.clientId;
  };

  const getPOSTDATA = async () => {
    handleActionDispatch(IS_DATA_LOADING, true);
    setClientData(clientsData);
    // const res = await getClientData();
    // if (res.data.isSuccessful) {
    //   setClientData(res.data.data);
    // }
    handleActionDispatch(IS_DATA_LOADING, false);
  };

  useEffect(() => {
    getPOSTDATA();
  }, []);

  useEffect(() => {
    if (isArray(clientData)) {
      const clientNames = clientData.map((itm) => ({ id: itm.clientId, name: itm.clientName }));
      handleActionDispatch(CLIENT_NAMES, clientNames || []);
    }
  }, [clientData]);

  const handleProceedBackAlertBox = () => {
    handleCloseBackAlertBox();
    const { proceedAction, additionalInfoForProceed } = genericAlertBox;
    switch (proceedAction) {
      case 'deleteRecord':
        handleDelete(additionalInfoForProceed);
        break;
      default:
        break;
    }
  };

  const handleCloseBackAlertBox = () =>
    setShowGenericAlertBox({
      open: false,
      title: '',
      titleType: '',
      content: '',
      proceedAction: '',
      showProceedBtn: false,
      cancelButtonText: '',
      proceedButtonText: '',
      additionalInfoForProceed: null
    });

  return (
    <Grid container spacing={2}>
      <AlertComponent
        alertOpen={alertBox.alertOpen}
        alertType={alertBox.alertType}
        message={alertBox.message}
        setAlertBox={setAlertBox}
      />
      <DialogBox
        open={genericAlertBox.open}
        handleClose={handleCloseBackAlertBox}
        title={genericAlertBox.title}
        titleType={genericAlertBox.titleType}
        content={genericAlertBox.content}
        isCancelButton
        isProceedButton={genericAlertBox.showProceedBtn}
        cancelButtonText={genericAlertBox.cancelButtonText}
        proceedButtonText={genericAlertBox.proceedButtonText}
        handleProceed={handleProceedBackAlertBox}
      />
      <Grid
        item
        xs={12}
        style={{
          // backgroundColor: '#f9fafc',
          // display: 'flex',
          // justifyContent: 'flex-start',
          // alignItems: 'center',
          // borderBottom: '1px solid #e9e9e9',
          // position: 'fixed',
          // top: 0,
          // height: '4rem',
          // width: '100%',
          // marginTop: '4rem'
          backgroundColor: '#f9fafc',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '1rem',
          marginBottom: '-5rem',
          borderBottom: '1px solid #e9e9e9'
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
