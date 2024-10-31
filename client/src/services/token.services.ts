const accessTokenStorageKey = "access_token";

export const setToken = (token: string) => {
  localStorage.setItem(accessTokenStorageKey, token); //key:value pair
};

export const getToken = async () => {
  localStorage.getItem(accessTokenStorageKey); //key
};

export const removeToken = async () => {
  localStorage.removeItem(accessTokenStorageKey); //key
};
