import { useState } from 'react';
import { MovieType } from '../lib/types';
import { PlaylistCardContent } from './PlaylistCardContent';
interface PlaylistCardProps {
  movie: MovieType;
}

export const PlaylistCard = ({ movie }: PlaylistCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  console.log('isEditing', isEditing, movie.id);

  return (
    <div className='card lg:card-side lg:grid lg:grid-cols-3 bg-base-300'>
      {isEditing ? (
        <PlaylistCardContent movie={movie} onEdit={() => setIsEditing(true)} />
      ) : (
        <PlaylistCardContent movie={movie} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};
