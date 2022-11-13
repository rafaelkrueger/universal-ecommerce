import axios from "axios";

const Api = axios.create({
  baseURL: "https://tamarintec.herokuapp.com",
});

export default Api;
