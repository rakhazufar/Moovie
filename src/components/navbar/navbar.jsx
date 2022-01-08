import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Search from "../Search/Search";
import Login from "../Login/Login";

export default function Navbar() {
  return (
    <header>
      <div className="container-nav">
        <h1>Moovie</h1>

        <div className="icon-nav">
          <Login />
          <Search />
          <HiOutlineMenuAlt4 className="menu-icon" />
        </div>
      </div>
    </header>
  );
}
