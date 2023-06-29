import { FC, ReactNode } from 'react';

export const Gallery: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8'>{children}</div>
);
