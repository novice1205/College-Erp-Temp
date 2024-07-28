import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../styles/customTheme";

export default function BasicCard() {
  return (
    <ThemeProvider theme={Theme}>
      <Card
        sx={{
          bgcolor: (theme) => theme.palette.secondary.main,
          display: "flex",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <CardContent>
          <div id="container">
            <div id="heading" sx={{
                color: (theme) => theme.palette.common.white,
            }}>
                <Typography variant="h4">Overview</Typography>          
            </div>
            <div className="info">
                <div className="totalColleges">

                </div>
                <div className="totalUsers">

                </div>

            </div>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </ThemeProvider>
  );
}
