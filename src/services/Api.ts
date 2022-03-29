import axios, { AxiosRequestConfig } from 'axios'

class Http{
	static service = axios.create({
		baseURL: import.meta.env.VITE_BASE_URL as string
	})
	
	static get(resource: string, config?: AxiosRequestConfig){
		return Http.service.get(resource, config)
	}
}

export default Http
