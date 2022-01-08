import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Drawer, Box, TextField } from "@mui/material";

export default function Search() {
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
      className="search"
    >
      <AiOutlineClose
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className="closeSearch"
      />
      <div className="searchInput">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="standard"
          color="warning"
          autoFocus={true}
          InputLabelProps={{ className: "textfield_label" }}
          inputProps={{ className: "textfield_input" }}
          style={{ width: "70vw", marginRight: "10px" }}
        />
        <AiOutlineSearch
          className="searchButton"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        />
      </div>
    </Box>
  );
  return (
    <>
      <AiOutlineSearch
        className="search-icon"
        onClick={toggleDrawer(anchor, true)}
      />
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
