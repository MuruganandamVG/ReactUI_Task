import React from "react";
import Chart from "./Chart";
import { Toolbar } from "@mui/material";
import { Container, Grid, IconButton, Paper } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import TableData from "./Table";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import styled from "@emotion/styled";
import "./Display.css";

const Display = () => {
  const cardStyles = {
    maxWidth: 450,
    maxHeight: 400,
    padding: "0px",
    background: "#FFFFFF",
  };

  const HeaderToolbarStyle = {
    "&.MuiToolbar-root": {
      minHeight: "25px",
      paddingRight: "10px",
    },
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ margin: "auto" }}>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyles}>
            <CardContent sx={{ paddingTop: "4px", paddingBottom: "5px" }}>
              <Toolbar sx={HeaderToolbarStyle}>
                <Typography sx={{ color: "#46238e", fontWeight: "700" }}>
                  Jira Issue Status
                </Typography>
                <div className="weeklyIcon_class">
                  <Typography sx={{ color: "#7141DC", fontWeight: "500" }}>
                    Daily
                  </Typography>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                </div>
              </Toolbar>
              <div className="date_class">
                <p>May 24</p>
              </div>
              <Chart />
              <div style={{ marginTop: "5px" }}>
                <div className="chartNumber_class">
                  <span>1K</span>
                  <span>90</span>
                </div>
                <div className="chartIssue_class">
                  <span>Issue in Total Added this week</span>
                  <span>Issues today</span>
                </div>
              </div>
              <hr style={{ marginTop: "17px" }} />
              <div className="chartMessage">
                <span className="chartMessage_icon">&#9888;</span>
                <span className="chartMessage_text">
                  Users who have commited key secrets in their project
                </span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyles}>
            <CardContent sx={{ paddingTop: "4px", paddingBottom: "4px" }}>
              <Toolbar sx={HeaderToolbarStyle}>
                <Typography sx={{ color: "#46238e", fontWeight: "700" }}>
                  Top Contributors
                </Typography>
                <div className="weeklyIcon_class">
                  <Typography sx={{ color: "#7141DC", fontWeight: "500" }}>
                    Weekly
                  </Typography>
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                </div>
              </Toolbar>
              <TableData />
              <hr style={{ marginTop: "17px" }} />
              <div className="chartMessage">
                <span className="chartMessage_icon">&#9660;</span>
                <span className="chartMessage_text">
                  Higher by 50% compared to last week at 500
                </span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Display;
