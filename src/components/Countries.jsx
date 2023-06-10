import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryDetails from "./CountryDetails";

const Countries = () => {
  // country state
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);
  const getCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="search">
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="filter">
          <select name="filter" id="filter" placeholder="Filter by Region">
            <option value="Filter by Region">Filter by Region</option>
            <option value="Filter by Region">Africa</option>
            <option value="Filter by Region">America</option>
            <option value="Filter by Region">Asia</option>
            <option value="Filter by Region">Europe</option>
            <option value="Filter by Region">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries">
        {countries.map((country) => {
          console.log(country.region);
          return (
            <div className="country-card">
              <div className="flag">
                <img src={country.flags.svg} alt={country.flags.alt} />
              </div>
              <div className="country-info">
                <div className="country-name">
                  <span className="title">{country.name.common}</span>
                </div>
                <div className="country-population">
                  <span className="title">Population:</span>
                  <span className="value">{country.population}</span>
                </div>
                <div className="country-region">
                  <span className="title">Region:</span>
                  <span className="value">{country.region}</span>
                </div>
                <div className="country-capital">
                  <span className="title">Capital:</span>
                  <span className="value">{country.capital}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
