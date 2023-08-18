import {defineStore} from "pinia";
import api from "@/api";
import {IMovieSearch, IMovieSearchQuery, MovieSearch} from "@/store/models/movie-search";

export const useMovieSearchStore = defineStore('movie-search', {
    state: (): {data: IMovieSearch, query: IMovieSearchQuery} => ({
        data: {
            items: [],
            totalResults: '',
            response: '',
        },
        query: {
            s: '',
        }
    }),
    actions: {
        async search(params: IMovieSearchQuery) {
            const res= await api.movie.index(params);
            this.data = MovieSearch.create(res.data);
        }
    }
})