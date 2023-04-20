import axios from "axios";

export const fetchItems = (p) =>
  axios(
    `${process.env.REACT_APP_SERVER}/api/items?populate=image&pagination[page]=${p}&pagination[pageSize]=8`
  ).then((res) => res.data);
export const fetchItem = (id) =>
  axios(`${process.env.REACT_APP_SERVER}/api/items/${id}?populate=image`).then(
    (res) => res.data
  );

export const postContact = (data) =>
  axios.post(`${process.env.REACT_APP_SERVER}/api/contacts`, data);

export const fetchItembyName = (query) =>
  axios(
    `${process.env.REACT_APP_SERVER}/api/items?populate=image&filters[name][$containsi]=${query}`
  ).then((res) => res.data.data);
export const fetchOrder = (data) =>
  axios
    .post(`${process.env.REACT_APP_SERVER}/api/orders`, data, {
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
    .then((res) => res.data);
