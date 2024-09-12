import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

const baseInstance = axios.create({
  baseURL: API_URL,
});

export default baseInstance;
