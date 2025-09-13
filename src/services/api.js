import axios from 'axios'

const BASE_URL = import.meta.env.BASE_URL

const URL_POST_PE = import.meta.env.URL_POST_PE
const API_KEY = import.meta.env.API_KEY

export const submitFormData = (data) => {
  return axios.post(`${BASE_URL}${URL_POST_PE}`, data, {
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    }
  })
}
