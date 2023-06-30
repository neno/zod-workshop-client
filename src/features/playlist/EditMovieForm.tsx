import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useMoviesStore from '../../store/movies-store';
import { MovieType, movieSchema } from '../../lib/types';
import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';

type EditMovieFormProps = {
  movie: MovieType;
  onCancel: () => void;
  onSubmit: () => void;
};

export const EditMovieForm = ({
  movie,
  onCancel,
  onSubmit,
}: EditMovieFormProps) => {
  const { updateMovie } = useMoviesStore();

  const methods = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: movie,
  });

  const submit = (data: MovieType) => {
    updateMovie(data);
    onSubmit();
  };

  return (
    <FormProvider {...methods}>
      <form
        className='card-body text-sm h-full'
        noValidate
        onSubmit={methods.handleSubmit(submit)}
      >
        <div className='w-full h-full flex flex-col gap-2'>
          <fieldset>
            <legend className='sr-only'>Edit Movie Details</legend>
            <ol className='flex flex-col gap-2 w-full @container'>
              <li>
                <TextField label='Title' name='title' />
              </li>
              <li>
                <TextField multiline label='Overview' name='overview' />
              </li>
            </ol>
          </fieldset>
          <div className='flex justify-between gap-2 mt-auto flex-grow-1'>
            <Button type='submit' mode='tertiary'>
              Update
            </Button>
            <Button mode='danger' onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
