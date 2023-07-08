export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genre_ids: number[];
  popularity: number;
  vote_count: number;
}

export interface MovieDetails {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_count: number;
  vote_average: number;
  overview: string;
  tagline: string;
}

export interface CardImgProps {
  imageSrc: string;
  title: string;
  releaseDate: string;
  vote_average: number;
  myID: number;
}

export interface FiltrosProps {
  filtrarPor: string;
}

export interface TitleSection {
  titulo: string;
}