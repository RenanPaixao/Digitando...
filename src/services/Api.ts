import axios, { AxiosRequestConfig } from 'axios'

class Http{
	static service = axios.create({
		baseURL: import.meta.env.VITE_BASE_URL as string
	})
	
	static get(resource: string, config?: AxiosRequestConfig){
		return Http.service.get(resource, config)
	}
	public static async getWords(){
		const { data } = await Http.get('/db/requestMock.json')
		
		// Get random positions in words array from response
		const randomIndex = () => (Math.random() * (data.words.length)).toFixed(0)
		
		// Fill an array length 50 with random words
		const words = [...Array(50).keys()].map(() =>  data.words[randomIndex()])
		return words
	}
}

export default Http
