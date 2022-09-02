import { API_URL } from '../constants/app';
import { FormatedMovieFilter } from '../types/filter';
import { MovieDetails, SearchResults } from '../types/movies';
import { HttpClient } from './HttpClient';

class MovieService {
  private readonly httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({ baseURL: API_URL });
  }

  list(filters: FormatedMovieFilter) {
    return this.httpClient.get<SearchResults>('discover/movie', { params: filters });
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
