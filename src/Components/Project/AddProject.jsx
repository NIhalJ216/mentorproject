import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import RenderComponents from '../RenderComponents/RenderComponents';
import { CLIENTS_DATA, PROJECT_HEAD_DATA, PROJECT_MANAGER_DATA, USERS_DATA } from '../../Utils/DataConstants';
import { COMPONENTS } from '../../Utils/Constants';
import { ROUTES } from '../../Routes/Paths';
import { addProjectData, updateProjectData } from '../../Services/projectServices';

function AddProject() {
  const navigate = useNavigate();
  const location = useLocation();
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON } = COMPONENTS;
  const { PROJECTS } = ROUTES;
  const [isUpdate, setIsUpdate] = useState(false);
  const [emptyPayload, setEmptyPayload] = useState({
    projectName: '',
    clientName: '',
    projectCost: '',
    projectHead: '',
    rate: '',
    projectManager: '',
    projectUsers: '',
    description: '',
    isActive: true,
    isDeleted: false,
    createdDate: new Date(),
    updatedDate: new Date(),
    createdBy: 1,
    updatedBy: 1
  });
  const [payload, setPayload] = useState({ ...emptyPayload });

  const updatePayload = (pairs) => setPayload((prevPayload) => ({ ...prevPayload, ...pairs }));

  const topComponents = [
    {
      control: ICON,
      iconName: <ArrowBackIosIcon />,
      color: 'primary',
      handleClickIcon: () => navigate(PROJECTS),
      columnWidth: 0.5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start'
      },
      key: 'addClientLabel',
      label: 'Add Client',
      columnWidth: 1
    },
    {
      control: ICON,
      iconName: <CloseIcon />,
      groupStyle: { position: 'absolute', right: '1rem' },
      color: 'error',
      handleClickIcon: () => navigate(PROJECTS),
      columnWidth: 0.5
    }
  ];

  const projectLabels = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: 'projectLabel',
      label: 'Project Name',
      columnWidth: 5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.5rem'
      },
      key: 'clientName',
      label: 'Client Name',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'projectCost',
      label: 'Project Cost',
      columnWidth: 3.5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '1rem'
      },
      key: 'projectHead',
      label: 'Project Head',
      columnWidth: 3.5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'rate',
      label: 'Rate',
      columnWidth: 5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'projectManager',
      label: 'Project Manager',
      columnWidth: 5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'projectUsers',
      label: 'Project Users',
      columnWidth: 3.5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '2rem'
      },
      key: 'description',
      label: 'Description',
      columnWidth: 3.5
    }
  ];

  const projectInputs = [
    {
      control: TEXT_FIELD,
      key: 'projectName',
      variant: 'standard',
      label: 'Project Name',
      columnWidth: 6
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '1rem' },
      key: 'clientName',
      label: 'Client Name',
      options: CLIENTS_DATA,
      isSelecteAllAllow: false,
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'projectCost',
      variant: 'standard',
      label: 'Project Cost',
      columnWidth: 6
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '1rem' },
      key: 'projectHead',
      label: 'Project Head',
      options: PROJECT_HEAD_DATA,
      isSelecteAllAllow: false,
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'rate',
      variant: 'standard',
      label: 'Rate',
      columnWidth: 6
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '1rem' },
      key: 'projectManager',
      label: 'Project Manager',
      options: PROJECT_MANAGER_DATA,
      isSelecteAllAllow: false,
      columnWidth: 6
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '1rem' },
      key: 'projectUsers',
      label: 'Project Users',
      options: USERS_DATA,
      isSelecteAllAllow: false,
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'description',
      label: 'Description',
      variant: 'standard',
      isMultiline: true,
      textRows: 4,
      columnWidth: 6
    }
  ];

  const actionButtons = [
    {
      control: BUTTON,
      // groupStyle: { marginRight: '1rem' },
      btnTitle: 'Submit',
      handleClickButton: () => handleAddProject(),
      columnWidth: 0.8
    },
    {
      control: BUTTON,
      // groupStyle: { marginRight: '1rem' },
      btnTitle: 'Cancel',
      handleClickButton: () => null,
      columnWidth: 0.8
    }
  ];

  const handleChangeData = (key, val, ind) => {
    if (key) {
      const updateFields = { [key]: val };
      // if (key === 'clientName') {
      //   updateFields.clientName = parseInt(val, 10);
      // } else if (key === 'projectHead') {
      //   updateFields.projectHead = parseInt(val, 10);
      // } else if (key === 'projectManager') {
      //   updateFields.projectManager = parseInt(val, 10);
      // } else if (key === 'projectUsers') {
      //   updateFields.projectUsers = parseInt(val, 10);
      // } else {
      //   updateFields[key] = val;
      // }
      updatePayload({ ...updateFields });
    }
  };

  useEffect(() => {
    console.log('locationState', location?.state);
    if (location?.state) {
      updatePayload(location?.state);
      setIsUpdate(true);
    }
  }, [location?.state]);

  const handleAddProject = async () => {
    console.log('AddProject', payload);
    const data = payload;
    const id = location?.state?.projectId;
    const res = isUpdate ? updateProjectData(id, data) : addProjectData(data);
    if (res) {
      console.log('ProjectDataSave', res?.data);
      alert('Project added Successfully.');
      setIsUpdate(false);
      updatePayload(emptyPayload);
    }
  };
  console.log('updatePayload', payload);
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
          borderBottom: '1px solid #e9e9e9'
        }}
      >
        {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '32rem', overflowY: 'scroll' }}>
        <Box style={{ padding: '1.5rem', backgroundColor: 'white' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ paddingLeft: '0.8rem' }}>
              <RenderComponents
                metaData={{
                  control: TYPOGRAPHY,
                  label: 'Project Configuration Details',
                  labelStyle: { fontWeight: 'bold' },
                  columnWidth: 6
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex' }}>
              <Grid item xs={4} style={{ paddingLeft: '1.5rem' }}>
                {projectLabels?.map((comp, ind) => (
                  <RenderComponents key={ind} metaData={comp} ind={ind} />
                ))}
              </Grid>
              <Grid item xs={8}>
                {projectInputs?.map((comp, ind) => (
                  <RenderComponents
                    key={ind}
                    metaData={comp}
                    ind={ind}
                    payload={payload}
                    handleChange={handleChangeData}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#f9fafc',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9'
        }}
      >
        {actionButtons?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
    </Grid>
  );
}

export default AddProject;
