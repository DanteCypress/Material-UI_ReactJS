import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  },
  tabsContainer: {
    marginLeft: "auto"
    // indicatorColor: "main"
  },
  tabs: {
    ...theme.typography.tabs,
    minWidth: 12,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, newValue] = useState(0);

  const handleChange = (e, value) => {
    newValue(value);
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          {/*Toolbar- stack content horizontally, rather than vertically*/}
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabsContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tabs} label="Home" />
              <Tab className={classes.tabs} label="Services" />
              <Tab className={classes.tabs} label="The Revolution" />
              <Tab className={classes.tabs} label="About Us" />
              <Tab className={classes.tabs} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
