import { MovieType, NewMovieType } from '../lib/types';
import { Card } from './Card';

type MovieCardProps = {
  movie: MovieType | NewMovieType;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return <Card title={movie.title} poster_path={movie.poster_path}></Card>;
};
