import { FC, ReactNode } from 'react';
import { clsxm } from '../lib/helpers';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mode?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  type = 'button',
  mode = 'primary',
  className = '',
  disabled = false,
  title,
}) => {
  const styles = clsxm(
    'inline-block relative px-4 py-2 font-medium text-black bg-white',
    {
      'bg-primary text-white': mode === 'primary',
      'bg-secondary text-white': mode === 'secondary',
      'bg-accent text-white': mode === 'tertiary',
      'bg-error text-white': mode === 'danger',
      className,
    }
  );

  return (
    <button
      onClick={onClick}
      className={styles}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};
