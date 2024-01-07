export function filterByMember(countries) {
  return countries.filter((country) => country.unMember === true);
}

export function filterByIndependent(countries) {
  return countries.filter((country) => country.independent === true);
}

export function searchInputFilter(countries, search) {
  return countries.filter(
    (country) =>
      (country.name.common && country.name.common.toLowerCase().includes(search.toLowerCase())) ||
      (country.region.toLowerCase().includes(search.toLowerCase())) ||
      (country.subregion && country.subregion.toLowerCase().includes(search.toLowerCase()))
  );
}

export function sortCountries(countries, sort) {
  switch (sort) {
    case "name":
      return countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    case "area":
      return countries.sort((a, b) => b.area - a.area);
    case "population":
      return countries.sort((a, b) => b.population - a.population);
    default:
      return countries;
  }
}

export function filterByRegion(
  countries,
  americasFilter,
  antarcticFilter,
  africaFilter,
  asiaFilter,
  europeFilter,
  oceaniaFilter
) {
  const regions = [];
  americasFilter && regions.push("Americas");
  antarcticFilter && regions.push("Antarctic");
  africaFilter && regions.push("Africa");
  asiaFilter && regions.push("Asia");
  europeFilter && regions.push("Europe");
  oceaniaFilter && regions.push("Oceania");
  return regions.length === 0
  ? countries
  : countries.filter((country) => regions.includes(country.region));
}
