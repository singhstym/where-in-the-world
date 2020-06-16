import styled from "styled-components";

export const RegionSelectStyle = styled.div`
  position: relative;
  margin-top: 2.5rem;
  width: 60%;
  & .angleDownIcon {
    position: absolute;
    font-size: 0.8rem;
    top: 50%;
    right: 1rem;
    transform: translate(0%, -50%);
    pointer-events: none;
  }
  select {
    width: 100%;
    padding: 1.25rem;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
    appearance: none;
    outline: none;
    background-color: ${(props) =>
      props.themes ? "hsl(210, 22%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${(props) =>
      props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  }

  @media (min-width: 650px) {
    width: 30%;
    margin-top: 0;
  }

  @media (min-width: 850px) {
    width: 20%;
  }

  @media (min-width: 1250px) {
    width: 15%;
  }
`;
