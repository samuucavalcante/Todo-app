import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: "http://localhost:3000/",
});
const isServer = typeof window === 'undefined'

api.interceptors.request.use(config => {
  const token = getCookie('__session')
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export { api };
