import React from "react";
import "../App.css";
import {AppBar,Box,Toolbar,Typography} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

class footer extends React.Component {
  Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  render() {
    return (
      <Box>
        <AppBar
          position="static"
          elevation={0}
          component="footer"
          color="default"
        >
          <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="caption">©2024</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default footer;
