import {defineStore} from "pinia";
import api from "@/api";
import {IMovieQuery, MovieView} from "@/store/models/Movie";

function emptyMovie (): MovieView {
    return {
        title: null,
        year: null,
        rated: null,
        released: null,
        runtime: null,
        genre: null,
        director: null,
        writer: null,
        actors: null,
        plot: null,
        language: null,
        country: null,
        awards: null,
        poster: null,
        ratings: [],
        metascore: null,
        imdbRating: null,
        imdbVotes: null,
        imdbID: null,
        type: null,
        dvd: null,
        boxOffice: null,
        production: null,
        website: null,
        response: null,
    }
}

export const useMovieStore = defineStore('movie', {
    state: (): {data: MovieView, query: IMovieQuery} => ({
        data: emptyMovie(),
        query: {
            i: '',
            plot: 'full',
        }
    }),
    actions: {
        async view(params?: IMovieQuery) {
            const res= await api.movie.view(params || this.query);

            this.data = MovieView.create(res.data);
        },
        clear () {
            this.data = emptyMovie();
        }
    }
})