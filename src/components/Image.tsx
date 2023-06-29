type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export const Image = ({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  loading = 'lazy',
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      loading={loading}
    />
  );
};
