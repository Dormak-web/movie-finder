import {Movie} from "@/store/models/movie";

export interface IMovieSearch {
    items: Array<Movie> | [],
    totalResults: string,
    response: string,
}

export interface IMovieSearchQuery {
    s: string,
    page?: number | 1,
    type?: 'movie' | 'series' | 'episode',
    y?: number
}

export class MovieSearch {
    constructor(
       public items: Array<Movie> | [],
       public totalResults: string,
       public response: string
    ) {}

    static create(data: any) {
        return new MovieSearch(
            data.Search ? data.Search.map((movie: any) => Movie.create(movie)) : [],
            data.totalResults,
            data.Response,
        )
    }
}