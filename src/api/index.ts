import httpFactory from "./client";
import {IMovieSearchQuery} from "@/store/models/MovieSearch";
import {IMovieQuery} from "@/store/models/Movie";

const client = httpFactory();

const api = {
    movie: {
        index: (data: IMovieSearchQuery) => client.get('', {params: data}),
        create: (data: any) => client.post('', JSON.stringify(data)),
        view: (data: IMovieQuery) => client.get('', {params: data}),
    }
}

export default api;