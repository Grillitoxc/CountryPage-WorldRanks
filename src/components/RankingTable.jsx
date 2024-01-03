import "../styles/ranking-table.css";

export const RankingTable = ({ countries }) => {
  const countriesArray = countries.countries;
  console.log(countriesArray);

  return (
    <>
      <section className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Population</th>
              <th>Area (km²)</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {countriesArray.map((country, index) => (
              <tr key={index}>
                <td className="image-container">
                  <img src={country.flags.png} alt={country.flags.alt} />
                </td>
                <td>{country.name.common}</td>
                <td>
                  {country.population.toLocaleString(undefined, {
                    useGrouping: true,
                  })}
                </td>
                <td>
                  {country.area.toLocaleString(undefined, {
                    useGrouping: true,
                  })}
                </td>
                <td>{country.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default RankingTable;
