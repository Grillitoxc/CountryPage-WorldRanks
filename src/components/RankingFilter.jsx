import { sortCountries } from "../utils/filters.js";
import { useEffect, useState } from "react";
import "../styles/ranking-filter.css";
import RankingTable from "./RankingTable.jsx";

export const RankingFilter = (countries) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [value, setValue] = useState("population");

  useEffect(() => {
    // Aquí va la lógica para sort by population, area, name
    // Se usa un useEffect para que cada vez que cambie el valor del select,
    // se vuelva a enviar el prop countries a RankingTable.jsx (esto funciona
    // porque el useEffect renderiza el componente cada vez que cambia el valor
    // y por ende se vuelve a enviar el prop)
    // Depende de value y debería depender del search igual cuando combine los componentes
    // PD: amo react soy el dios de este framework soy demasiado genio para esta wea
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
