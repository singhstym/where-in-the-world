import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  font-size: 1;
  font-weight: 600;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.themes ? "hsl(210, 22%, 22%)" : "hsl(0, 0%, 100%)"};
  div {
    cursor: pointer;
    font-weight: 300;
    span {
      margin-left: 0.5rem;
    }
  }
  @media (min-width: 850px) {
    padding: 2rem 4rem;
  }
`;
