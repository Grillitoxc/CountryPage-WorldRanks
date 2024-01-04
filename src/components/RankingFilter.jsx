import { sortCountries } from "../utils/filters.js";
import { useEffect, useState } from "react";
import "../styles/ranking-filter.css";
import RankingTable from "./RankingTable.jsx";

export const RankingFilter = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [value, setValue] = useState("population");

  useEffect(() => {
    const sortedCountries = sortCountries(countries, value);
    setFilteredCountries([...sortedCountries]);
  }, [value]);

  return (
    <>
      <aside className="ranking-filter-container">
        <h2>Filter</h2>
        <form action="">
          <label htmlFor="sort-filter">Sort by:</label>
          <select
            name="sort-filter"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="population">Population</option>
            <option value="area">Area</option>
            <option value="name">Name</option>
          </select>
        </form>
      </aside>
      <RankingTable countries={filteredCountries} client:load />
    </>
  );
};

export default RankingFilter;
