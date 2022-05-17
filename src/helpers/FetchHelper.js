// fetch
// denna funkar ej behöver fixas
const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export { getData };

// filter data
