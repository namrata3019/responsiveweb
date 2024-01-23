import { Box, Drawer, List, ListItemText } from "@mui/material";
import { useState } from "react";
const CustomDrawer = (props) => {
  return (
    <Drawer
      open={props.open}
      anchor="top"
      variant="persistent"
      style={{
        border:"2px solid black",
        display: "flex",
        width: "20%",
        height: "100%",
      }}
    >
    </Drawer>
  );
};

export default CustomDrawer;
