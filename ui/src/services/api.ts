/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponseTransformer } from "axios"
import { API_HOST } from "../utils/envs"
import humps from "humps"

const api = axios.create({
  baseURL: API_HOST
})

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("@finance/token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    delete config.headers.Authorization
  }

  config.transformResponse = [
    ...(config.transformResponse as AxiosResponseTransformer[]),
    (data: any, headers: any) => {
      if (!headers["content-type"]?.startsWith("application/json")) {
        return data
      }
      return humps.camelizeKeys(data, (key, convert) => {
        return key.charAt(0) === "_" ? "_" + convert(key) : convert(key)
      })
    }
  ]

  config.transformRequest = [
    (data: any, headers: any) => {
      const contentType = headers["Content-Type"]
      if (contentType && !contentType.includes("application/json")) {
        return data
      }
      return humps.decamelizeKeys(data)
    },
    ...(config.transformRequest as AxiosResponseTransformer[])
  ]

  return config
})

export default api
