export type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  poster_path: string;
  title: string;
  overview: string;
  genres: Genre[];
  vote_average: number;
};

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
};

export type SearchResults = {
  results: Movie[];
};

export type MovieFilter = {
  with_genres?: string[];
  page: number;
};
