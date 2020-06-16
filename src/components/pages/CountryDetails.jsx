import React from "react";
import { useEffect, useState } from "react";
import Details from "../Details";
import Button from "../Button";
import { BsArrowLeft } from "react-icons/bs";

import { CountryDetailsStyle } from "../styles/CountryDetailsStyle";

function CountryDetails({ match, history, themes }) {
  const [details, setDetails] = useState([]);
  const [currencyName, setCurrencyName] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const code = match.params.code;
      const api = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
      const data = await api.json();
      setDetails(data);
      getCurrencyName(data.currencies);
      getLanguages(data.languages);
    };
    getDetails();
  }, [match.params.code]);

  const getCurrencyName = (currencyData) => {
    const tempData = Object.values(currencyData[0].name);
    setCurrencyName(tempData);
  };

  const getLanguages = (languagesData) => {
    const tempData = [];
    Object.values(languagesData).map((language) =>
      tempData.push(`${language.name}, `)
    );
    setLanguages(tempData);
  };

  function formatNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <CountryDetailsStyle themes={themes} className="country-details-container">
      <div className="back-btn-container">
        <BsArrowLeft className="backArrowIcon" />
        <Button history={history} />
      </div>
      <div className="country-details">
        <div className="img-section">
          <img src={details.flag} alt="" />
        </div>
        <div className="details-section">
          <div className="main-details">
            <div className="country-name">{details.name}</div>
            <div className="details-div">
              <span className="semiBoldLabel">Native Name: </span>
              {details.nativeName}
            </div>
            <div className="details-div">
              <span className="semiBoldLabel"> Population: </span>
              {details.population === undefined
                ? ""
                : formatNum(details.population)}
            </div>
            <div className="details-div">
              <span className="semiBoldLabel"> Region: </span>
              {details.region}
            </div>
            <div className="details-div">
              <span className="semiBoldLabel"> Sub Region: </span>
              {details.subregion}
            </div>
            <div className="details-div">
              <span className="semiBoldLabel"> Capital: </span>
              {details.capital}
            </div>
          </div>
          <div className="other-details">
            <div className="details-div">
              <span className="semiBoldLabel"> Top Level Domain: </span>
              {details.topLevelDomain}
            </div>
            <div className="details-div">
              <span className="semiBoldLabel"> Currencies: </span>
              {currencyName}
            </div>
            <div className="details-div">
              <span className="semiBoldLabel"> Languages: </span>
              {languages}
            </div>
          </div>
          <div className="border-details">
            <div className="semiBoldLabel">Border Countries: </div>
            <div className="border-cards-container">
              {details.borders === undefined
                ? ""
                : Object.values(details.borders).map((code) => {
                    return <Details key={code} code={code}></Details>;
                  })}
            </div>
          </div>
        </div>
      </div>
    </CountryDetailsStyle>
  );
}

export default CountryDetails;
