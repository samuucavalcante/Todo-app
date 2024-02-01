import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: "todo-160ljo3mn-samuucavalcante.vercel.app/",
});
const isServer = typeof window === 'undefined'

api.interceptors.request.use(config => {
  const token = getCookie('__session')
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export { api };
