// fetch
// denna funkar ej behöver fixas
const getData = async (endpoint) => {
  const url = 'https://edice-back.herokuapp.com/';
  const res = await fetch(url + endpoint);
  const data = await res.json();

  return data;
};

export { getData };

// filter data
