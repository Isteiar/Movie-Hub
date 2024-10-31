export interface AllData {
  genres: string[];
  movies: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}



export interface IMovie {
  title: string;
  thumbnail: string;
  description: string;
  release: Date;
  duration: number;
  genres: string[];
  reviews: string[];
  averageRating?: number;
}
