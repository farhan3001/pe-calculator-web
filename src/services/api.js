import axios from 'axios'

const API_URL = 'https://your-backend-api.com/submit'

export const submitFormData = (data) => {
  return axios.post(API_URL, data)
}
