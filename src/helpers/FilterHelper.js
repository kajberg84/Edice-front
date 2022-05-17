// simpel funktion för att filtrera produkter på en kategori
const filterProductsOnCategory = (data, category) => {
  const filteredData = data.filter((data) => {
    return data.category === category;
  });

  return filteredData;
};

export { filterProductsOnCategory };
