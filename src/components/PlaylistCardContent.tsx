import { Image } from './Image';
import useMoviesStore from '../store/movies-store';
import { Button } from './Button';
import { IconPencil, IconTrash } from './icons';
import { MovieType } from '../lib/types';
interface PlaylistCardProps {
  movie: MovieType;
  onEdit: () => void;
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

export const PlaylistCardContent = ({ movie, onEdit }: PlaylistCardProps) => {
  const { id, title, poster_path, release_date, overview } = movie;
  const { deleteMovie } = useMoviesStore();

  return (
    <>
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
      <div className='card-body col-span-2'>
        <h2 className='card-title'>{title}</h2>

        <small>{release_date}</small>
        <p className='line-clamp-4 overflow-hidden flex-grow-0'>{overview}</p>
        <div className='card-actions justify-end mt-auto'>
          <Button onClick={onEdit} title='Edit Movie' mode='tertiary'>
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
    </>
  );
};
