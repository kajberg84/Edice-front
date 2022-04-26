// Lägger till user i lokalstorage med namnet som skickas in i "name"
export function setLocalStorage(name, user) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(name, JSON.stringify(user));
    return true;
  } else return false;
}

// Tar bort namnet som skickas in i "name" från lokalstorage
export function removeLocalStorage(name) {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(name);
    return true;
  } else return false;
}
