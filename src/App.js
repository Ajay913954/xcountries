import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <div className="card" key={country.name}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="flag"
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
