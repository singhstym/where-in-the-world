import React from "react";
import Country from "../Country";
import styled from "styled-components";
import { motion } from "framer-motion";

const CountriesSectionStyle = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }

  @media (min-width: 850px) {
    padding: 0 4rem;
  }
`;

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Countries({ countries, themes }) {
  return (
    <CountriesSectionStyle
      variants={variants}
      initial="hidden"
      animate="visible"
      className="countries-container"
    >
      {countries.map((country) => (
        <Country key={country.alpha3Code} country={country} themes={themes} />
      ))}
    </CountriesSectionStyle>
  );
}

export default Countries;
