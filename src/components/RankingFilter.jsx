import {
  sortCountries,
  filterByRegion,
  filterByMember,
  filterByIndependent,
  searchInputFilter,
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
  const [searchFilter, setSearchFilter] = useState("");
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

    if (searchFilter) {
      filtered = searchInputFilter(filtered, searchFilter);
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
    searchFilter,
  ]);

  return (
    <>
      <header className="ranking-header-container">
        <p>Se encontraron {filteredCountriesLength} Países</p>
        <form id="form-search-countries" className="search-form">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            type="text"
            id="id-search-countries"
            name="search-countries"
            className="search-input"
            placeholder="Buscar por Nombre, Región o Subregión"
            onChange={(e) => setSearchFilter(e.target.value)}
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
        <section>
          <h2>Estado</h2>
          <section className="status-buttons">
            <label className="status-checkbox">
              <input
                id="id-member-filter"
                type="checkbox"
                className="checkbox"
                onChange={() => setMemberFilter(!memberFilter)}
              />
              <span class="custom-checkbox"></span>
              Member
            </label>
            <label className="status-checkbox">
              <input
                id="id-independent-filter"
                type="checkbox"
                className="checkbox"
                onChange={() => setIndependentFilter(!independentFilter)}
              />
              <span class="custom-checkbox"></span>
              Independent
            </label>
          </section>
        </section>
      </aside>
      <RankingTable countries={filteredCountries} client:load />
    </>
  );
};

export default RankingFilter;
