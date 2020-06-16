import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Details({ code }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = async () => {
      const api = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
      const data = await api.json();
      setName(data.name);
    };
    getName();
  }, [code]);

  return (
    <Link to={`/details/${code}`}>
      <div className="border-details-cards">{name}</div>
    </Link>
  );
}

export default Details;
