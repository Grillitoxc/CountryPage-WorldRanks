import "../styles/ranking-table.css";

export const RankingTable = ({ countries }) => {
  return (
    <>
      <section className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Bandera</th>
              <th>Nombre</th>
              <th>Población</th>
              <th>Área (km²)</th>
              <th>Región</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
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
