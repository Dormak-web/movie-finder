import httpFactory from "./client";

const client = httpFactory();

interface movieIndex {
    s: string,
    page?: number | 1,
    type?: 'movie' | 'series' | 'episode',
    y?: number
}

interface movieView {
    t?: string,
    i?: string,
}

const api = {
    movie: {
        index: (data: movieIndex) => client.get('', {params: data}),
        create: (data: any) => client.post('', JSON.stringify(data)),
        view: (data: movieView) => client.post('', {params: data}),
    }
}

export default api;