// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axios, {AxiosRequestConfig} from 'axios';

// @TODO Add env baseURL + params

export default () => {
    const config: AxiosRequestConfig = {
        baseURL: 'http://www.omdbapi.com/',
        headers: {'content-Type': 'application/json'},
        params: {apikey: '41d7e213'},
        responseType: 'json',
        withCredentials: false
    }

    const client = axios.create(config);

    client.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            console.error('### ERROR: ', error)
            return Promise.reject(error);
        }
    )

    return client;
}
