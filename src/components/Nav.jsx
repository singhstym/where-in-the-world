import React from "react";
import { NavStyles } from "./styles/NavStyles";

function Nav({ children }) {
  return <NavStyles>{children}</NavStyles>;
}

export default Nav;
