import {defineStore} from "pinia";
import api from "@/api";
import {IMovieSearchQuery, MovieSearch} from "@/store/models/movie-search";

export const useMovieSearchStore = defineStore('movie-search', {
    state: (): {data: MovieSearch, query: IMovieSearchQuery} => ({
        data: {
            items: [],
            totalResults: 0,
            response: '',
        },
        query: {
            s: '',
            page: 1
        }
    }),
    actions: {
        async search(params?: IMovieSearchQuery) {
            const res= await api.movie.index(params || this.query);

            this.data = MovieSearch.create(res.data);
        }
    }
})