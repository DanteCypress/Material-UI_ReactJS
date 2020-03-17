import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
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
  },
  tabs: {
    ...theme.typography.tabs,
    minWidth: 12,
    marginLeft: "25px"
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          {/*Toolbar- stack content horizontally, rather than vertically*/}
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />
            <Tabs className={classes.tabsContainer}>
              <Tab className={classes.tabs} label="Home" />
              <Tab className={classes.tabs} label="Services" />
              <Tab className={classes.tabs} label="The Revolution" />
              <Tab className={classes.tabs} label="About Us" />
              <Tab className={classes.tabs} label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
