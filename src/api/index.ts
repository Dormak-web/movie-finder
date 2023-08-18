import httpFactory from "./client";
import {IMovieSearchQuery} from "@/store/models/movie-search";

const client = httpFactory();

interface movieView {
    t?: string,
    i?: string,
}

const api = {
    movie: {
        index: (data: IMovieSearchQuery) => client.get('', {params: data}),
        create: (data: any) => client.post('', JSON.stringify(data)),
        view: (data: movieView) => client.post('', {params: data}),
    }
}

export default api;