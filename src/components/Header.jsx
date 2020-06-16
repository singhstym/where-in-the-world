import React from "react";
// import styled from "styled-components";
import { HeaderStyle } from "./styles/HeaderStyle";
import { FaMoon, FaRegMoon } from "react-icons/fa";

function Header({ themes, setThemes }) {
  return (
    <HeaderStyle themes={themes}>
      <a href="/">Where in the World?</a>
      <div onClick={() => setThemes(!themes)}>
        {themes ? <FaMoon /> : <FaRegMoon />}
        <span>Dark Mode</span>
      </div>
    </HeaderStyle>
  );
}

export default Header;
