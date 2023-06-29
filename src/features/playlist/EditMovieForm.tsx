import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useMoviesStore from '../../store/movies-store';
import { MovieType, movieSchema } from '../../lib/types';
import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';

type EditMovieFormProps = {
  movie: MovieType;
  onCancel: () => void;
};

export const EditMovieForm = ({ movie, onCancel }: EditMovieFormProps) => {
  const { updateMovie } = useMoviesStore();

  const methods = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: movie,
  });

  const submit = (data: MovieType) => {
    updateMovie(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className='block w-full bg-base-300 text-sm p-2'
        noValidate
        onSubmit={methods.handleSubmit(submit)}
      >
        <fieldset className='w-full'>
          <legend className='sr-only'>Edit Movie Details</legend>
          <ol className='flex flex-col gap-0 w-full'>
            <li>
              <TextField label='title' name='title' />
            </li>
            <li>
              <TextField label='Release Date' type='date' name='release_date' />
            </li>
            <li>
              <TextField multiline label='Overview' name='overview' />
            </li>
          </ol>
          <div className='flex justify-start gap-2 mt-4'>
            <Button type='submit' mode='primary'>
              Update
            </Button>
            <Button onClick={onCancel}>Cancel</Button>
          </div>
        </fieldset>
      </form>
    </FormProvider>
  );
};
