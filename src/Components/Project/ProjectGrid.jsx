import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { COMPONENTS } from '../../Utils/Constants';
import { ROUTES } from '../../Routes/Paths';
import MuiTable from '../MuiTable/MuiTable';
import RenderComponents from '../RenderComponents/RenderComponents';
import { getProjectData, deleteProjectData } from '../../Services/projectServices';
import './ProjectGrid.scss';

function ProjectGrid() {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);
  const { ADD_PROJECT } = ROUTES;
  const { SELECT_BOX, BUTTON, ICON } = COMPONENTS;

  const topComponents = [
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { paddingBottom: '0.5rem', marginBottom: '1rem' },
      key: 'projects',
      label: 'Projects',
      options: [],
      isSelecteAllAllow: false,
      columnWidth: 2
    },
    {
      control: ICON,
      key: 'user',
      iconTitle: 'User',
      groupStyle: { position: 'absolute', right: '21rem', marginBottom: '1rem' },
      columnWidth: 1
    },
    {
      control: ICON,
      key: 'department',
      iconTitle: 'Department',
      groupStyle: { position: 'absolute', right: '15rem', marginBottom: '1rem' },
      columnWidth: 1
    },
    {
      control: BUTTON,
      groupStyle: { position: 'absolute', right: '6rem', marginBottom: '1rem' },
      btnTitle: 'Add Project',
      handleClickButton: () => navigate(ADD_PROJECT),
      startIcon: <AddIcon />,
      columnWidth: 1.5
    }
  ];

  const columnData = [
    // { field: 'clientId', headerName: 'Id', width: 70 },
    { field: 'projectName', headerName: 'Project Name', width: 300 },
    { field: 'estimatedHours', headerName: 'Estimated Hours', width: 180 },
    { field: 'loggedHours', headerName: 'Logged Hours', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: () => (
        <div style={{ cursor: 'pointer' }}>
          <RenderComponents
            metaData={{
              control: ICON,
              iconName: <AddTaskIcon />,
              tooltipTitle: 'status'
              // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
              // handleClickIcon: () => handleEdit(params.id)
            }}
          />
        </div>
      )
    },
    { field: 'jobs', headerName: 'Jobs', width: 80 },
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
    console.log('EDIT', data);
    const tableData = projectData.find((itm) => itm.projectId === data);
    console.log('tableData', tableData);
    navigate(ADD_PROJECT, { state: tableData });
  };

  const handleDelete = async (data) => {
    console.log('DELETE', data);
    const res = await deleteProjectData(data);
    if (res?.data.isSuccessful) {
      const tableData = projectData.filter((itm) => itm.projectId !== data);
      setProjectData(tableData);
      alert('Project deleted successfully.');
    }
  };

  const getRowId = (data) => {
    console.log('rowID', data.projectId);
    return data.projectId;
  };

  const getProjectListData = async () => {
    const res = await getProjectData();
    console.log('RESPONCE', res?.data);
    if (res.data.isSuccessful) {
      setProjectData(res.data.data);
    }
  };
  console.log('projectData', projectData);

  useEffect(() => {
    getProjectListData();
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
        <MuiTable columnsData={columnData} rowsData={projectData} getRowId={getRowId} />
      </Grid>
    </Grid>
  );
}

export default ProjectGrid;
