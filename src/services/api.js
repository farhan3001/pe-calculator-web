import axios from 'axios'

const baseUrl = process.env.VUE_APP_API_URL
const apiKey = process.env.VUE_APP_API_KEY

const urlPostPeDoctor = process.env.VUE_APP_URL_POST_PE_DOCTOR
const urlPostPeNurse = process.env.VUE_APP_URL_POST_PE_NURSE
const urlGetDataPEPatientByEmail = process.env.VUE_APP_URL_GET_PE_LATEST


export const submitFormDataDoctor = (data) => {

  return axios.post(`${baseUrl}${urlPostPeDoctor}`, data, {
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    }
  })
}

export const submitFormDataNurse = (data) => {

  return axios.post(`${baseUrl}${urlPostPeNurse}`, data, {
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    }
  })
}

export const getLatestPeCalculatorByEmail = (email) => {
  return axios.get(
    `${baseUrl}${urlGetDataPEPatientByEmail}/${encodeURIComponent(email)}`,
    {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    }
  )
}
