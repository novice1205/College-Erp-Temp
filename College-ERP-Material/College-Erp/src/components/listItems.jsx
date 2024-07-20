import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/Dashboard' style={{textDecoration:'none',color:'inherit'}}>
      <ListItemText primary="Dashboard" sx={{ fontFamily: 'Poppins' }} disableTypography/>
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <Link to='/ClientList' style={{textDecoration:'none',color:'inherit'}}>
      <ListItemText primary="Colleges" sx={{ fontFamily: 'Poppins' }} disableTypography/>
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ViewModuleIcon />
      </ListItemIcon>
      <Link to='/ModuleList' style={{textDecoration:'none',color:'inherit'}}>
      <ListItemText primary="Modules" sx={{ fontFamily: 'Poppins' }} disableTypography />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
      <ListItemText primary="Reports" sx={{ fontFamily: 'Poppins' }} disableTypography/>
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CloudUploadIcon/>
      </ListItemIcon>
      <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
      <ListItemText primary="Uploads" sx={{ fontFamily: 'Poppins' }} disableTypography/>
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ fontFamily: 'Poppins' }} disableTypography>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Client Reports" sx={{ fontFamily: 'Poppins' }} disableTypography/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Staff Reports" sx={{ fontFamily: 'Poppins' }} disableTypography/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Student Reports" sx={{ fontFamily: 'Poppins' }} disableTypography/>
    </ListItemButton>
  </React.Fragment>
);