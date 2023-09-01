import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


// AUTH

export const createNewUser = async (credentials) => {
  const resp = await axios.post(`/users/signup`, credentials);
  setAuthHeader(resp.data.token);
  return resp.data;
};

export const loginUser = async (credentials) => {
  const resp = await axios.post(`/users/login`, credentials);
  setAuthHeader(resp.data.token);
  return resp.data;
};

export const logoutUser = async (credentials) => {
  const resp = await axios.post(`/users/logout`, credentials);
   clearAuthHeader();
  return resp.data;
};

export const getUser = async (_, thunk) => {
   const state = thunk.getState();
  const persistedToken = state.auth.token;

      if (persistedToken === null) {
      return thunk.rejectWithValue('no access');;
    }
  setAuthHeader(persistedToken);
  const resp = await axios.get(`/users/current`);
  return resp.data;
};




// CONTACTS 

export const fetchContacts = async () => {
  const resp = await axios.get(`/contacts`);
  return resp.data;
};

export const createContacts = async (contactData) => {
  const resp = await axios.post(`/contacts`, contactData);
  return resp.data;
}; 

export const deleteContacts = async (id) => {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp.data;
}; 

export const updateContacts = async (id) => {
  const resp = await axios.patch(`/contacts/${id}`);
  return resp.data;
}; 