import axios from 'axios'

const baseUrl = process.env.VUE_APP_API_URL
const apiKey = process.env.VUE_APP_API_KEY

const urlPostPe = process.env.VUE_APP_URL_POST_PE

export const submitFormData = (data) => {

  return axios.post(`${baseUrl}${urlPostPe}`, data, {
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    }
  })
}
