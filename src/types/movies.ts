export type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  poster_path: string;
  title: string;
  overview: string;
  genres: number[];
  vote_average: number;
};

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: number[];
  vote_average: number;
};

export type SearchResults = {
  results: Movie[];
};
