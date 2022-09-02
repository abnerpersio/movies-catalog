import { FormatedMovieFilter, MovieFilter } from '../types/filter';

export class FilterConverter {
  static convert(params: MovieFilter): FormatedMovieFilter {
    return {
      page: params.page ?? 1,
      with_genres: params.genres ? params.genres.join(',') : undefined,
      sort_by: params.orderBy === 'popularity' ? 'popularity.desc' : undefined,
    };
  }
}
