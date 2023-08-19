export const typeOptions = [
    {
        value: 'movie',
        label: 'movie',
    },
    {
        value: 'series',
        label: 'series'
    },
    {
        value: 'episode',
        label: 'episode'
    },
]

export interface IMovie {
    title: string,
    year: string,
    imdbID?: string,
    type?: 'movie' | 'series' | 'episode' | null,
    poster: string,
    director?: string | null,
}

export interface IMovieQuery {
    i?: string,
    type?: 'movie' | 'series' | 'episode',
    plot?: 'short' | 'full',
    y?: number | null
}

class Rating {
    constructor(
        public source: string | null,
        public value: string | null,
    ) {
    }

    static create(data: any) {
        return new Rating(
            data.Source,
            data.Value,
        )
    }

}

export class MovieView {
    constructor(
        public title: string | null,
        public year: number | null,
        public rated: string | null,
        public released: string | null,
        public runtime: string | null,
        public genre: string | null,
        public director: string | null,
        public writer: string | null,
        public actors: string | null,
        public plot: string | null,
        public language: string | null,
        public country: string | null,
        public awards: string | null,
        public poster: string | null,
        public ratings: Array<Rating> | [],
        public metascore: string | null,
        public imdbRating: string | null,
        public imdbVotes: string | null,
        public imdbID: string | null,
        public type: 'movie' | 'series' | 'episode' | null,
        public dvd: string | null,
        public boxOffice: string | null,
        public production: string | null,
        public website: string | null,
        public response: string | null,
    ) {
    }

    static create(data: any) {
        return new MovieView(
            data.Title,
            data.Year,
            data.Rated,
            data.Released,
            data.Runtime,
            data.Genre,
            data.Director,
            data.Writer,
            data.Actors,
            data.Plot,
            data.Language,
            data.Country,
            data.Awards,
            data.Poster,
            data.Ratings ? data.Ratings.map((movie: any) => Rating.create(movie)) : [],
            data.Metascore,
            data.imdbRating,
            data.imdbVotes,
            data.imdbID,
            data.Type,
            data.DVD,
            data.BoxOffice,
            data.Production,
            data.Website,
            data.Response,
        )
    }
}

export class Movie {
    constructor(
        public title: string | null,
        public year: string | null,
        public imdbID: string | null,
        public type: 'movie' | 'series' | 'episode' | null,
        public poster: string | null,
    ) {
    }

    static create(data: any) {
        return new Movie(
            data.Title,
            data.Year,
            data.imdbID,
            data.Type,
            data.Poster,
        )
    }
}
