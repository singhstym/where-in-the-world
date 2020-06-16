import styled from "styled-components";
import { motion } from "framer-motion";

export const CountryDivStyles = styled(motion.div)`
  display: flex;
  width: 85%;
  background-color: ${(props) =>
    props.themes ? "hsl(210, 22%, 22%)" : "hsl(0, 0%, 100%)"};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 5px;
  a {
    .country-container {
      img {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2),
          -2px -2px 10px rgba(0, 0, 0, 0.2);
      }
    }
    .main-country-details {
      padding: 2.5rem 2rem;
      color: ${(props) =>
        props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
      .main-countryName {
        font-weight: 800;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      div {
        font-size: 0.9rem;
        font-weight: 300;
        margin-bottom: 0.5rem;
        .semiBoldLabel {
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
  }

  @media (min-width: 650px) {
    width: 48%;
  }

  @media (min-width: 850px) {
    width: 30%;
  }

  @media (min-width: 1250px) {
    width: 21%;
  }
`;
