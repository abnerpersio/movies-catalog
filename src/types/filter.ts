export type MovieFilter = {
  page: number;
  genres?: string[];
  orderBy?: 'popularity';
};

export type FormatedMovieFilter = {
  with_genres?: string;
  sort_by?: 'popularity.desc';
  page: number;
};
