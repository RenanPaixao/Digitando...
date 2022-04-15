import axios, { AxiosRequestConfig } from 'axios'

class Http{
	static service = axios.create({
		baseURL: import.meta.env.VITE_BASE_URL as string
	})
	
	static get(resource: string, config?: AxiosRequestConfig){
		return Http.service.get(resource, config)
	}
	public static async getWords(){
		const { data } = await Http.get('/languages/english_450k.json')
		const randomIndex = () => Math.random() * (data.words.length - 0)
		return Array(80).fill(()=> data[randomIndex()])
	}
}

export default Http
