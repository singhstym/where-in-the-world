import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color .5s ease;
  }
  body{
    background-color: ${(props) =>
      props.theme ? "hsl(203, 25%, 17%)" : "hsl(0, 0%, 98%)"};
      color: ${(props) => (props.theme ? "#fff" : "black")};
    font-family: "Nunito Sans", sans-serif;
  }
  a{
    text-decoration: none;
    color: ${(props) => (props.theme ? "#fff" : "black")};
  }
  
`;
