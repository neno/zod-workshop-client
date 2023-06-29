import { useState } from 'react';
import { MovieType } from '../lib/types';
import { PlaylistCardContent } from './PlaylistCardContent';
import {EditMovieForm} from "../features/playlist/EditMovieForm";
import {twMerge} from "tailwind-merge";
interface PlaylistCardProps {
  movie: MovieType;
}

export const PlaylistCard = ({ movie }: PlaylistCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  console.log('isEditing', isEditing, movie.id);

  return (
    <div className={twMerge('card bg-base-300', !isEditing && 'lg:card-side lg:grid lg:grid-cols-3')}>
      {isEditing ? (
        <EditMovieForm movie={movie} onSubmit={() => setIsEditing(false) } onCancel={() => setIsEditing(false)} />
      ) : (
        <PlaylistCardContent movie={movie} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};
