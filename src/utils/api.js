export const fetchChemicalData = (casNumber) => {
  return fetch(`https://commonchemistry.cas.org/api/detail?cas_rn=${casNumber}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch chemical data");
      }
      return response.json();
    })
    .then((data) => {
      // Process and return the data exactly like your current code
      return {
        name: data.name || "",
        molecularFormula: data.molecularFormula || "",
        molecularMass: data.molecularMass || "",
        canonicalSmiles: data.canonicalSmiles || "",
        inchi: data.inchi || "",
        inchiKey: data.inchiKey || "",
        synonyms: data.synonyms || [],
      };
    });
};
