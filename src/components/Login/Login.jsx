import React, { useState } from "react";
import { Drawer, Box, TextField } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

export default function Login() {
  const [state, setState] = useState({
    right: false,
  });
  const anchor = "right";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "100vw", height: "100vh" }}
      role="presentation"
      className="login"
    >
      <Box className="topLogin">
        <h3>Login to Moovie</h3>
        <AiOutlineClose
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className="closeSearch"
        />
      </Box>

      <Box className="loginField">
        <Box className="facebook">Login with Facebook</Box>
        <p>or Login with your email</p>
      </Box>
    </Box>
  );
  return (
    <>
      <BsPerson className="login" onClick={toggleDrawer(anchor, true)} />
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </>
  );
}
