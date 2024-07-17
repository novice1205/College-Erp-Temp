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

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" sx={{ fontFamily: 'Poppins' }} disableTypography/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Colleges" sx={{ fontFamily: 'Poppins' }} disableTypography/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ViewModuleIcon />
      </ListItemIcon>
      <ListItemText primary="Modules" sx={{ fontFamily: 'Poppins' }} disableTypography />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" sx={{ fontFamily: 'Poppins' }} disableTypography/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CloudUploadIcon/>
      </ListItemIcon>
      <ListItemText primary="Uploads" sx={{ fontFamily: 'Poppins' }} disableTypography/>
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