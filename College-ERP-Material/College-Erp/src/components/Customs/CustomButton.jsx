import * as React from 'react';
import Button from '@mui/material/Button';
import Theme from '../../styles/customTheme';
import { ThemeProvider } from "@mui/material/styles";

export default function CustomButton({label, type="contained", size, color='primary'}) {
  return (
    <ThemeProvider theme={Theme}>
      <Button 
          variant={type}
          size={size}
          sx={{
              width: "fit-content",
              display: "block",
              // backgroundColor: "green"
              bgcolor: (theme) => theme.palette[color].main,
              '&:hover':{
                bgcolor: (theme) => theme.palette[color].main,
                color: 'black'
              }
          }}
      >{label}</Button>
    </ThemeProvider>
  );
}
