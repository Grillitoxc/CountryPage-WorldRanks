export function byUNMember(countries) {
  return sortCountries(countries.filter((country) => country.unMember === true), "population");
}

export function byIndependent(countries) {
  return sortCountries(countries.filter((country) => country.independent === true), "population");
}

export function byRegion(countries, region) {
  return sortCountries(countries.filter((country) => country.region === region), "population");
}

export function bySubregion(countries, subregion) {
  return sortCountries(countries.filter((country) => country.subregion === subregion), "population");
}

export function byName(countries, name) {
  return sortCountries(countries.filter((country) => country.name.common === name), "population");
}

export function totalCountries(countries) {
  return countries.length;
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

