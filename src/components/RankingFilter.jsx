import { sortCountries } from "../utils/filters.js";
import { useState } from "react";
import "../styles/ranking-filter.css";

export const RankingFilter = (countries) => {
  const [value, setValue] = useState("population");

  const handleSortFilterChange = event => {
    setValue(event.target.value);
    console.log("sdgdsjkg");
  };

  return (
    <>
      <aside class="ranking-filter-container">
        <h2>Filter</h2>
        <form action="">
          <label for="sort-filter">Sort by:</label>
          <select name="sort-filter" value={value} onChange={handleSortFilterChange}>
            <option value="population">Population</option>
            <option value="area">Area</option>
            <option value="name">Name</option>
          </select>
        </form>
      </aside>
    </>
  );
};

export default RankingFilter;
