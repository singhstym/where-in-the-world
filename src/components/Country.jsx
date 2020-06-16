import React from "react";
import { Link } from "react-router-dom";

import { CountryDivStyles } from "./styles/CountryDivStyles";

const variants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 25,
    },
  },
  hover: {
    scale: 1.025,
    transition: { duration: 0.2 },
  },
};

function Country({ country, themes }) {
  function formatNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <CountryDivStyles variants={variants} whileHover="hover" themes={themes}>
      <Link to={`/details/${country.alpha3Code}`}>
        <div className="country-container">
          <img
            src={country.flag}
            title={`${country.alpha3Code}-Flag`}
            alt={`${country.name}-flag`}
          />
          <div className="main-country-details">
            <div className="main-countryName">{country.name}</div>
            <div>
              <span className="semiBoldLabel">Population: </span>
              {formatNum(country.population)}
            </div>
            <div>
              <span className="semiBoldLabel">Region: </span>
              {country.region}
            </div>
            <div>
              <span className="semiBoldLabel">Capital: </span>
              {country.capital}
            </div>
          </div>
        </div>
      </Link>
    </CountryDivStyles>
  );
}

export default Country;
