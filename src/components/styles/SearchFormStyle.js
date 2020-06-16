import styled from "styled-components";

export const SearchFormStyle = styled.form`
  width: 100%;
  div {
    position: relative;
    & .search-icon {
      position: absolute;
      z-index: 2;
      font-size: 24px;
      top: 50%;
      left: 1rem;
      transform: translate(0%, -50%);
      color: ${(props) =>
        props.themes ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)"};
    }
    input {
      padding: 1.25rem 1.25rem 1.25rem 3rem;
      width: 100%;
      border-radius: 5px;
      border: none;
      outline: none;
      font-size: 0.9rem;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      color: ${(props) =>
        props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
      background-color: ${(props) =>
        props.themes ? "hsl(210, 22%, 22%)" : "hsl(0, 0%, 100%)"};
      caret-color: ${(props) =>
        props.themes ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
      ::placeholder {
        color: ${(props) =>
          props.themes ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)"};
        opacity: 0.8;
      }
      :focus {
        border: 2px solid
          ${(props) => (props.themes ? "hsl(0, 0%, 100%)" : "hsl(214,82%,51%)")};
      }
    }
  }

  @media (min-width: 650px) {
    width: 60%;
  }

  @media (min-width: 850px) {
    width: 50%;
  }
`;
