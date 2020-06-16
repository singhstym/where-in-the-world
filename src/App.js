import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import Countries from "./components/pages/Countries";
import CountryDetails from "./components/pages/CountryDetails";

import PopupNotification from "./components/PopupNotification";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Search from "./components/Search";
import RegionSelect from "./components/RegionSelect";

import { GlobalStyle } from "./components/styles/GlobalStyles";
import "./components/styles/global.css";

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

function App() {
  const [data, setData] = useState();
  const [themes, setThemes] = useState(false);
  const [region, setRegion] = useState();
  const [popupStat, setPopupStat] = useState(false);

  const getData = async () => {
    const api = "https://restcountries.eu/rest/v2/all";
    const res = await fetch(api);
    const jsonData = await res.json();
    setData(jsonData);
  };

  const filterByRegion = async (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    if (selectedRegion === "all") {
      getData();
    } else {
      const api = `https://restcountries.eu/rest/v2/region/${selectedRegion}`;
      const res = await fetch(api);
      const jsonData = await res.json();
      setData(jsonData);
    }
  };

  const filterBySearch = async (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.inputSearch.value;
    if (searchInput.length === 0) {
      alert("please enter an input");
      getData();
    } else {
      e.target.elements.inputSearch.value = "";
      const api = `https://restcountries.eu/rest/v2/name/${searchInput}`;
      const res = await fetch(api);
      if (res.status !== 200) {
        getData();
        setPopupStat(true);
      } else {
        const jsonData = await res.json();
        setData(jsonData);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HashRouter basename="/">
      <GlobalStyle theme={themes} />
      <>
        <PopupNotification popupStat={popupStat} setPopupStat={setPopupStat} />
        <Header themes={themes} setThemes={setThemes} />
        <Main>
          <Route path="/" exact>
            <Nav>
              <Search filterBySearch={filterBySearch} themes={themes}></Search>
              <RegionSelect
                filterByRegion={filterByRegion}
                themes={themes}
                region={region}
              ></RegionSelect>
            </Nav>
            {data && <Countries countries={data} themes={themes} />}
          </Route>
          <Route
            path="/details/:code"
            render={(props) => <CountryDetails {...props} themes={themes} />}
          />
        </Main>
      </>
    </HashRouter>
  );
}

export default App;
