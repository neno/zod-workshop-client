import { toast } from 'react-toastify';
import { SearchErrorName } from './types';

export class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause?: unknown;

  constructor({ name, message, cause }: { name: T; message: string; cause?: unknown }) {
    super(message);
    this.name = name;
    this.message = message;
    this.cause = cause;

    this.showErrorMessage();
    this.log();
  }

  showErrorMessage() {
    toast.error(this.message);
  }

  // Send error to Sentry or other error tracking service
  // eslint-disable-next-line class-methods-use-this
  log() {
    console.error(this.cause);
  }
}

export class SearchError extends ErrorBase<SearchErrorName> {}
