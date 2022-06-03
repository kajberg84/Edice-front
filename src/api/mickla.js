export const users = [
  {
    id: 1,
    fname: "Ida",
    lname: "Idasson",
    adress: "Idavägen 2",
    zipCode: 11111,
    city: "Idastad",
    phone: "070-0000000",
    email: "Ida@Ida.com",
    userlevel: "basic",
    password: "Ida1",
    created: "2022-01-12",
  },
  {
    id: 2,
    fname: "Kaj",
    lname: "Kajson",
    adress: "Kajvägen 2",
    zipCode: 11111,
    city: "Kajstad",
    phone: "070-0000001",
    email: "Kaj@Kaj.com",
    userlevel: "basic",
    password: "Kaj1",
    created: "2022-01-12",
  },
  {
    id: 3,
    fname: "Mattis",
    lname: "Mattisson",
    adress: "Mattisvägen 2",
    zipCode: 11111,
    city: "Mattisstad",
    phone: "070-0000002",
    email: "Mattis@Mattis.com",
    userlevel: "basic",
    password: "Mattis1",
    created: "2022-01-12",
  },
];

export const getUser = (email, password) => {
  const user = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (user.length > 0) {
    const { password, created, ...rest } = user[0];
    return rest;
  } else {
    return null;
  }
};
