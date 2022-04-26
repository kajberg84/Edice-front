import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Usertoken state. undefined if not in localstorage
  const [userToken, setUserToken] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("edice-user")) {
        const response = window.localStorage.getItem("edice-user");
        return JSON.parse(response);
      }
      return "";
    }
  });

  function setUserTokenLocalStorage(token) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("edice-user", JSON.stringify(token));
      setUser(token);
    } else {
      window.localStorage.removeItem("edice-user");
    }
  }

  // Updating usertoken if changed/refreshed
  useEffect(() => {
    setUserTokenLocalStorage(userToken);
  }, [userToken]);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
