import axios from "axios";

const API_URL = "https://south-showy-garden.glitch.me";

const testInstance = axios.create({
  baseURL: API_URL,
});

export default testInstance;
