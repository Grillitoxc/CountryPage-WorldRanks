import { sortCountries, filterByRegion, filterByMember, filterByIndependent } from "../utils/filters.js";
import { useEffect, useState } from "react";
import "../styles/ranking-filter.css";
import RankingTable from "./RankingTable.jsx";

export const RankingFilter = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
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
      filtered = filterByMember(filtered)
    }

    if (independentFilter) {
      filtered = filterByIndependent(filtered)
    }

    const sortedCountries = sortCountries(filtered, value);
    setFilteredCountries([...sortedCountries]);
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
      <aside className="ranking-filter-container">
        <section>
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
        </section>
        <section>
          <button onClick={() => setAmericasFilter(!americasFilter)}>
            Americas
          </button>
          <button onClick={() => setAntarcticFilter(!antarcticFilter)}>
            Antarctic
          </button>
          <button onClick={() => setAfricaFilter(!africaFilter)}>Africa</button>
          <button onClick={() => setAsiaFilter(!asiaFilter)}>Asia</button>
          <button onClick={() => setEuropeFilter(!europeFilter)}>Europe</button>
          <button onClick={() => setOceaniaFilter(!oceaniaFilter)}>
            Oceania
          </button>
        </section>
        <section>
          <input type="checkbox" onChange={() => setMemberFilter(!memberFilter)} /> Member
          <input type="checkbox" onChange={() => setIndependentFilter(!independentFilter)} /> Independent
        </section>
      </aside>
      <RankingTable countries={filteredCountries} client:load />
    </>
  );
};

export default RankingFilter;
