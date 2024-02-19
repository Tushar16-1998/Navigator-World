import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryInfo = () => {
  const [countryData, setCountryData] = useState({});
  const [countryName, setCountryName] = useState('Angola'); // Default country

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        setCountryData(response.data[0]);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
    fetchCountryData();
  }, [countryName]);

  const handleCountryNameChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Country Name:
          <input type="text" value={countryName} onChange={handleCountryNameChange} />
        </label>
        <button type="submit">Get Country Info</button>
      </form>
      {countryData && Object.keys(countryData).length > 0 && (
        <div>
          <h1>{countryData.name.common}</h1>
          <p><strong>Capital:</strong> {countryData.capital[0]}</p>
          <p><strong>Population:</strong> {countryData.population}</p>
          <p><strong>Region:</strong> {countryData.region}</p>
          {/* ... (continue with other properties) */}
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
