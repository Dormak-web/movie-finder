import {IMovie, Movie} from "@/store/models/movie";

export interface IMovieSearch {
    items: Array<IMovie | Movie> | [],
    totalResults: number,
    response: string,
}

export interface IMovieSearchQuery {
    s?: string,
    page?: number | 1,
    type?: 'movie' | 'series' | 'episode',
    y?: number | null
}

export class MovieSearch {
    constructor(
       public items: Array<IMovie> | [],
       public totalResults: number,
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