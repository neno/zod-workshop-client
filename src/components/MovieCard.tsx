import { MovieType, NewMovieType } from '../lib/types';
import { Image } from './Image';

type MovieCardProps = {
  movie: MovieType | NewMovieType;
  children?: React.ReactNode;
};

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

export const MovieCard = ({ movie, children }: MovieCardProps) => {
  const { title, poster_path } = movie;
  return (
    <div
      className={`relative w-full h-full aspect-[2/3] hover:shadow-xl shadow-primary bg-gray-300`}
    >
      {poster_path ? (
        <Image
          src={`${imageBaseUrl}${poster_path}`}
          alt={title}
          className='w-full h-full object-cover object-center'
          sizes='(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw'
          width={640}
          height={960}
        />
      ) : (
        <h3 className='p-4 m-0 text-primary'>{title}</h3>
      )}
      <div className='w-full absolute bottom-0 right-0 flex justify-between items-center p-2'>
        {children}
      </div>
    </div>
  );
};
