import Image from 'next/image';
import { NavIconProps } from '@/types';

const Icon: React.FC<NavIconProps>  = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Icon;