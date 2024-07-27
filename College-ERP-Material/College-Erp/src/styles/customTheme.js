import { createTheme, styled } from "@mui/material/styles";

// Color variables
const primary = '#0869D9';
const secondary = '#B0D4FC';


const Theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary
    },
    black: {
      100: "rgb(20, 20, 20, 100%)",
      75: "rgb(20, 20, 20, 75%)",
      50: "rgb(20, 20, 20, 50%)",
      25: "rgb(20, 20, 20, 25%)",
      10: "rgb(20, 20, 20, 10%)",
      5: "rgb(20, 20, 20, 5%)",
      3: "rgb(20, 20, 20, 3%)",
    }

  },

  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontSize: 20,
    
    // Heading Variants 
    h1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: primary
    },
    h2: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },

    // 👇 Variants from chatGPT
    // Can be modified as needed
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '0.75rem',
    },
    overline: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '0.75rem',
    },
  },
});

export default Theme;