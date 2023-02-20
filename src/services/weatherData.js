import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getWeatherData = (query) => {
  return axios.get(`${BASE_URL}key=${API_KEY}&q=%${query}`)
}
