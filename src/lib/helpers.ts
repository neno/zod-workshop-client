import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MovieType, NewMovieType } from './types';

/** Merge classes with tailwind-merge with clsx full feature */
export function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function isNewMovie(movie: NewMovieType | MovieType): boolean {
  return !('id' in movie);
}
