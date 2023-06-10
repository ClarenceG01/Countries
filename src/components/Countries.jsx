import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("Filter by Region");
  const [search, setSearch] = useState("");

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    if (filter !== "Filter by Region" && country.region !== filter) {
      return false;
    }
    if (search && !country.name.common.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="header">
        <div className="search">
          <input type="text" placeholder="Search for a country..." value={search} onChange={handleSearchChange} />
        </div>
        <div className="filter">
          <select name="filter" id="filter" value={filter} onChange={handleFilterChange}>
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries">
        {filteredCountries.map((country) => (
          <Link
            to={`/country-details/${country.name.common}`}
            key={country.name.common}
            className="country-card"
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
