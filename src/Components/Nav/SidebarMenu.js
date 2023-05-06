import GrainIcon from '@mui/icons-material/Grain';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import { ROUTES } from '../../Routes/Paths';

const { CLIENTS } = ROUTES;

const iconStyles = {
  color: '#ffebee',
  cursor: 'pointer'
};

export const SIDEBAR_MENU = [
  {
    title: 'Services',
    icon: <GrainIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'Home',
    icon: <HomeIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'Self-service',
    icon: <PermIdentityIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'Attendance',
    icon: <EventAvailableIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'Time Tracker',
    icon: <AccessTimeIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'Announcements',
    icon: <CampaignIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'More',
    icon: <MoreHorizIcon style={iconStyles} />,
    url: CLIENTS
  },
  {
    title: 'Reports',
    icon: <PieChartOutlineIcon style={iconStyles} />,
    url: CLIENTS
  }
];
