import React from "react";

const CountryDetails = ({ country }) => {
  return (
    <div className="country-details">
      <h2>{country.name.common}</h2>
      <div>Population: {country.population}</div>
      <div>Region: {country.region}</div>
      <div>Capital: {country.capital}</div>
      {/* Display other details of the country */}
    </div>
  );
};

export default CountryDetails;
