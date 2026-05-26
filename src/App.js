import { useEffect, useState } from "react";
import "./App.css";

function App() {

  // Store all countries
  const [countries, setCountries] =
    useState([]);

  // Search input
  const [search, setSearch] =
    useState("");

  // Fetch API
  useEffect(() => {

    fetch(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {

        setCountries(data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  // Filter countries
  const filteredCountries =
    countries.filter((country) =>

      country.common
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  return (

    <div className="app">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      />

      {/* Countries Grid */}
      <div className="countries-container">

        {filteredCountries.map(
          (country) => (

            <div
              className="countryCard"
              key={country.common}
            >

              {/* Flag */}
              <img
                src={country.png}
                alt={country.common}
              />

              {/* Country Name */}
              <p>
                {country.common}
              </p>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default App;