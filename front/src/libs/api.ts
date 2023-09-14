import axios, { Axios} from 'axios'

export const api: Axios = axios.create({
  baseURL: 'https://private-9d65b3-tinnova.apiary-mock.com',
  headers: {
    'Bypass-Tunnel-Reminder': 'qwre'
  }
})