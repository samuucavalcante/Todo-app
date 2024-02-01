import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: process.env.API_URL || process.env.VERCEL_URL
});
const isServer = typeof window === 'undefined'

api.interceptors.request.use(config => {
  const token = getCookie('__session')
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export { api };
