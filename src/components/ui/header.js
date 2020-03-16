import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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

export default function header(props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        {/*Toolbar- stack content horizontally, rather than vertically*/}
        <Toolbar>Cypress Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
