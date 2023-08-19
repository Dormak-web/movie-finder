import {defineStore} from "pinia";
import api from "@/api";
import {IMovie, IMovieQuery, MovieView} from "@/store/models/Movie";

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
function emptyForm () {
    return {
        title: '',
        year: '',
        type: null,
        poster: '',
        director: ''
    }
}
export const useMovieStore = defineStore('movie', {
    state: (): {data: MovieView, query: IMovieQuery, form: IMovie} => ({
        data: emptyMovie(),
        query: {
            i: '',
            plot: 'full',
        },
        form: {
            title: '',
            year: '',
            type: null,
            poster: '',
            director: ''
        }
    }),
    actions: {
        async view(params?: IMovieQuery) {
            const res= await api.movie.view(params || this.query);

            this.data = MovieView.create(res.data);
        },
        clear () {
            this.data = emptyMovie();
        },
        clearForm () {
            this.form = emptyForm();
        },
    }
})