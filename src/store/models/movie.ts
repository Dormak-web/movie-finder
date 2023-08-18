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
    imdbID: string,
    type?: 'movie' | 'series' | 'episode',
    poster: string
}

export class Movie {
    constructor(
        public title: string | null,
        public year: string | null,
        public imdbID: string | null,
        public type: 'movie' | 'series' | 'episode' | null,
        public poster: string | null,
    ) {}

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
