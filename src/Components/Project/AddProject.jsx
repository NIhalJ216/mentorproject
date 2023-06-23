import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import RenderComponents from '../RenderComponents/RenderComponents';
import { CLIENTS_DATA, PROJECT_HEAD_DATA, PROJECT_MANAGER_DATA, USERS_DATA } from '../../Utils/DataConstants';
import { COMPONENTS } from '../../Utils/Constants';
import { isArray } from '../../Utils/Utils';
import { ROUTES } from '../../Routes/Paths';
import { addProjectData, updateProjectData } from '../../Services/projectServices';

function AddProject() {
  const navigate = useNavigate();
  const location = useLocation();
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON, NONE, MULTI_SELECT_BOX } = COMPONENTS;
  const { PROJECTS } = ROUTES;
  const [isUpdate, setIsUpdate] = useState(false);
  const [emptyPayload, setEmptyPayload] = useState({
    projectName: '',
    clientId: 0,
    projectCost: '',
    projectHeadId: 0,
    rate: '',
    projectManagerId: 0,
    // projectUserIds: [],
    // projectUserId: 0,
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
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start'
      },
      key: 'addprojectLabel',
      label: isUpdate ? 'Edit Project' : 'Add Project',
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

  const projectInputs = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: 'projectLabel',
      label: 'Project Name',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      key: 'projectName',
      variant: 'standard',
      label: '',
      groupStyle: { height: '3rem' },
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
        // marginTop: '0.5rem'
      },
      key: 'clientName',
      label: 'Client Name',
      columnWidth: 3
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { height: '3rem' },
      key: 'clientId',
      label: '',
      options: CLIENTS_DATA,
      isSelecteAllAllow: false,
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
        // marginTop: '0.8rem'
      },
      key: 'projectCost',
      label: 'Project Cost',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'projectCost',
      variant: 'standard',
      label: '',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
        // marginTop: '1rem'
      },
      key: 'projectHead',
      label: 'Project Head',
      columnWidth: 3
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { height: '3rem' },
      key: 'projectHeadId',
      label: '',
      options: PROJECT_HEAD_DATA,
      isSelecteAllAllow: false,
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        // marginTop: '0.8rem',
        marginLeft: '1rem'
      },
      key: 'rate',
      label: 'Rate',
      columnWidth: 0.2
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '2rem', height: '3rem' },
      key: 'rate',
      variant: 'standard',
      label: '',
      endAdornmentData: 'RPH',
      columnWidth: 1.3
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
        // marginTop: '0.8rem'
      },
      key: 'projectManager',
      label: 'Project Manager',
      columnWidth: 3
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { height: '3rem' },
      key: 'projectManagerId',
      label: '',
      options: PROJECT_MANAGER_DATA,
      isSelecteAllAllow: false,
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    // {
    //   control: TYPOGRAPHY,
    //   groupStyle: {
    //     height: '2rem',
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     alignItems: 'end'
    //     // marginTop: '0.8rem'
    //   },
    //   key: 'projectUsers',
    //   label: 'Project Users',
    //   columnWidth: 3
    // },
    // {
    // control: MULTI_SELECT_BOX,
    //   control: SELECT_BOX,
    //   select: true,
    //   variant: 'standard',
    //   groupStyle: { height: '3rem' },
    //   key: 'projectUserId',
    //   label: '',
    //   options: USERS_DATA,
    //   isSelecteAllAllow: false,
    //   columnWidth: 5
    // },
    // {
    //   control: NONE,
    //   // groupStyle: { marginBottom: '0.5rem' },
    //   columnWidth: 4
    // },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
        // marginTop: '2rem'
      },
      key: 'description',
      label: 'Description',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'description',
      label: '',
      variant: 'standard',
      isMultiline: true,
      textRows: 4,
      columnWidth: 5
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

  // const deleteMltSlctOptn = (key, val, ind) => {
  //   if (key === 'projectUserId' && val && isArray(payload.projectUserId)) {
  //     const projectUserId = payload.projectUserId.filter((uid) => uid.id !== val * 1);
  //     const projectUserIds = projectUserId.map((v) => v.id);
  //     updatePayload({ projectUserId, projectUserIds });
  //   }
  // };

  const handleChangeData = (key, val, ind) => {
    if (key) {
      const updateFields = { [key]: val };
      // if (key === 'projectUserId') {
      //   let updatedVal = val;
      //   if (isArray(updatedVal)) {
      //     if (isArray(payload.projectUserIds)) {
      //       payload.projectUserIds.forEach((itm) => {
      //         if (updatedVal.filter((ele) => ele.id === itm).length === 2) {
      //           updatedVal = updatedVal.filter((num) => num.id !== itm);
      //         }
      //       });
      //     }
      //   }
      //   updateFields.projectUserId = val;
      //   updateFields.projectUserIds = val.map((v) => v.id);
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
      if (isUpdate) {
        alert('Project updated Successfully.');
      } else {
        alert('Project addded Successfully.');
      }
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
          marginTop: '1rem',
          borderBottom: '1px solid #e9e9e9'
        }}
      >
        {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '32rem', overflowY: 'scroll' }}>
        <Box style={{ padding: '1.5rem', backgroundColor: 'white', height: '100%' }}>
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
            <Grid item xs={12}>
              <Grid container xs={12} style={{ paddingLeft: '1.5rem' }}>
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
