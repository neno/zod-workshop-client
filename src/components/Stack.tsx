import { FC, ReactNode } from 'react';
import { clsxm } from '../lib/helpers';

interface StackProps {
  children: ReactNode;
  className?: string;
}

export const Stack: FC<StackProps> = ({ children, className }) => (
  <div className={clsxm('flex flex-col gap-16', className)}>{children}</div>
);
