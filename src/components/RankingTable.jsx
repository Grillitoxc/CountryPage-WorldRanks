import { useEffect, useState } from "react";
import "../styles/ranking-table.css";

export const RankingTable = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    const getTotalPages = () => {
      if (countries.length === 0) {
        setTotalPages(1);
      } else {
        setTotalPages(Math.ceil(countries.length / countriesPerPage));
      }
    };
    getTotalPages();
  }, [countries, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowClick = (id) => {
    window.location.href = `/${id}`;
  };

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
            {currentCountries.map((country, index) => (
              <tr key={index} onClick={() => handleRowClick(country.cca2)}>
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
      <section className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => handlePreviousPage()}
        >
          Anterior
        </button>
        <button className="pagination-button" onClick={() => handleNextPage()}>
          Siguiente
        </button>
        <div className="current-page">
          Página {currentPage} de {totalPages}
        </div>
      </section>
    </>
  );
};

export default RankingTable;
