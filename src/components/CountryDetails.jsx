import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountryDetails();
  }, [countryName]); 

  const getCountryDetails = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  if (!country) {
    return <div>Loading...</div>;
  }

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
