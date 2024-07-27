import React from "react";
import CustomButton from "../components/Customs/CustomButton";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../styles/customTheme";
import { Typography } from "@mui/material";

export default function TestPage() {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <Typography >Test</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body1">body 1</Typography>

      <CustomButton label="test click" color="primary"/>
    </ThemeProvider>
    </>
  );
}
