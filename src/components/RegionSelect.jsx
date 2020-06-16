import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { RegionSelectStyle } from "./styles/RegionSelect";

function RegionSelect({ filterByRegion, themes, region }) {
  return (
    <RegionSelectStyle themes={themes}>
      <FaChevronDown className="angleDownIcon" />
      <select value={region} onChange={filterByRegion}>
        <option value="all">All</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Ocenia</option>
      </select>
    </RegionSelectStyle>
  );
}

export default RegionSelect;
