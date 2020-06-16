import styled from "styled-components";

export const NavStyles = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 650px) {
    justify-content: space-between;
  }

  @media (min-width: 850px) {
    padding: 2.5rem 4rem;
  }
`;
