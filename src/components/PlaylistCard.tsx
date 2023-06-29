import { Image } from './Image';
import { FC } from 'react';
import useMoviesStore from '../store/movies-store';
import { Button } from './Button';
import { IconPencil, IconTrash } from './icons';
import { MovieType } from '../lib/types';
interface PlaylistCardProps {
  movie: MovieType;
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
export const PlaylistCard = ({ movie }: PlaylistCardProps) => {
  const { id, title, poster_path, release_date, overview } = movie;
  const { deleteMovie } = useMoviesStore();

  return (
    <div className='card lg:card-side lg:grid lg:grid-cols-3 bg-base-300'>
      <figure>
        {poster_path && (
          <Image
            src={`${imageBaseUrl}${poster_path}`}
            alt={title}
            className='w-full h-full object-center object-cover'
            sizes='(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw'
            width={600}
            height={840}
          />
        )}
      </figure>
      <div className='card-body lg:col-span-2'>
        <h2 className='card-title'>{title}</h2>

        <small>{release_date}</small>
        <p>{overview}</p>
        <div className='card-actions justify-end'>
          <Button
            onClick={() => deleteMovie(id)}
            title='Edit Movie'
            mode='tertiary'
          >
            <IconPencil />
          </Button>
          <Button
            onClick={() => deleteMovie(id)}
            title='Remove from Playlist'
            mode='danger'
          >
            <IconTrash />
          </Button>
        </div>
      </div>
    </div>
  );
};
