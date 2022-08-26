import { API_URL } from '../constants/app';
import { MovieDetails, MovieFilter, SearchResults } from '../types/movies';
import { HttpClient } from './HttpClient';

class MovieService {
  private readonly httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({ baseURL: API_URL });
  }

  list({ page, with_genres }: MovieFilter) {
    return this.httpClient.get<SearchResults>('discover/movie', {
      params: {
        page,
        with_genres: with_genres ? with_genres.join(',') : undefined,
      },
    });
  }

  listPopular() {
    return this.httpClient.get<SearchResults>('trending/movie/day');
  }

  getMovie(id: string) {
    return this.httpClient.get<MovieDetails>(`movie/${id}`);
  }

  search(query: string) {
    return this.httpClient.get<SearchResults>('search/movie', { params: { query } });
  }
}

export default new MovieService();
