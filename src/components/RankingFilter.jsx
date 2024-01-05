import {
  sortCountries,
  filterByRegion,
  filterByMember,
  filterByIndependent,
} from "../utils/filters.js";
import { useEffect, useState } from "react";
import "../styles/ranking-filter.css";
import RankingTable from "./RankingTable.jsx";

export const RankingFilter = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCountriesLength, setFilteredCountriesLength] = useState(
    countries.length
  );
  const [value, setValue] = useState("population");
  const [americasFilter, setAmericasFilter] = useState(false);
  const [antarcticFilter, setAntarcticFilter] = useState(false);
  const [africaFilter, setAfricaFilter] = useState(false);
  const [asiaFilter, setAsiaFilter] = useState(false);
  const [europeFilter, setEuropeFilter] = useState(false);
  const [oceaniaFilter, setOceaniaFilter] = useState(false);
  const [memberFilter, setMemberFilter] = useState(false);
  const [independentFilter, setIndependentFilter] = useState(false);

  useEffect(() => {
    let filtered = filterByRegion(
      countries,
      americasFilter,
      antarcticFilter,
      africaFilter,
      asiaFilter,
      europeFilter,
      oceaniaFilter,
      countries
    );

    if (memberFilter) {
      filtered = filterByMember(filtered);
    }

    if (independentFilter) {
      filtered = filterByIndependent(filtered);
    }

    const sortedCountries = sortCountries(filtered, value);
    setFilteredCountries([...sortedCountries]);
    setFilteredCountriesLength([...sortedCountries].length);
  }, [
    value,
    americasFilter,
    antarcticFilter,
    africaFilter,
    asiaFilter,
    europeFilter,
    oceaniaFilter,
    memberFilter,
    independentFilter,
  ]);

  return (
    <>
      <header className="ranking-header-container">
        <p>Se encontraron {filteredCountriesLength} Países</p>
        <form id="form-search-countries">
          <input
            type="text"
            id="id-search-countries"
            name="search-countries"
            placeholder="Search for a country"
          />
        </form>
      </header>

      <aside className="ranking-filter-container">
        <section className="sort-by-container">
          <h2>Filtrar por:</h2>
          <form id="form-sort-filter" className="sort-filter-form">
            <select
              id="id-sort-filter"
              name="sort-filter"
              className="sort-filter-select"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="population">Población</option>
              <option value="area">Área</option>
              <option value="name">Nombre</option>
            </select>
          </form>
        </section>
        <section className="region-container">
          <h2>Región</h2>
          <section className="region-buttons">
            <button
              className={americasFilter ? "active" : "inactive"}
              onClick={() => setAmericasFilter(!americasFilter)}
            >
              Americas
            </button>
            <button
              className={antarcticFilter ? "active" : "inactive"}
              onClick={() => setAntarcticFilter(!antarcticFilter)}
            >
              Antarctic
            </button>
            <button
              className={africaFilter ? "active" : "inactive"}
              onClick={() => setAfricaFilter(!africaFilter)}
            >
              Africa
            </button>
            <button
              className={asiaFilter ? "active" : "inactive"}
              onClick={() => setAsiaFilter(!asiaFilter)}
            >
              Asia
            </button>
            <button
              className={europeFilter ? "active" : "inactive"}
              onClick={() => setEuropeFilter(!europeFilter)}
            >
              Europe
            </button>
            <button
              className={oceaniaFilter ? "active" : "inactive"}
              onClick={() => setOceaniaFilter(!oceaniaFilter)}
            >
              Oceania
            </button>
          </section>
        </section>
        <section className="status-container">
          <h2>Estado</h2>
          <input
            id="id-member-filter"
            type="checkbox"
            onChange={() => setMemberFilter(!memberFilter)}
          />
          Member
          <input
            id="id-independent-filter"
            type="checkbox"
            onChange={() => setIndependentFilter(!independentFilter)}
          />
          Independent
        </section>
      </aside>
      <RankingTable countries={filteredCountries} client:load />
    </>
  );
};

export default RankingFilter;
