export const fetchChemicalData = (casNumber) => {
  return fetch(`https://commonchemistry.cas.org/api/detail?cas_rn=${casNumber}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch chemical data");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Raw API data:", data);
      // Process and return the data exactly like your current code
      return {
        name: data.name || "",
        molecularFormula: data.molecularFormula || "",
        molecularMass: data.molecularMass || "",
        canonicalSmiles: data.canonicalSmiles || "",
        inchi: data.inchi || "",
        inchiKey: data.inchiKey || "",
        synonyms: data.synonyms || [],
        experimentalProperties: data.experimentalProperties || [],
      };
    });
};

export const saveMaterial = (materialData) => {
  return fetch("http://localhost:3001/materials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(materialData),
  }).then((response) => response.json());
};
