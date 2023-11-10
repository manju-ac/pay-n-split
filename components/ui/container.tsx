import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='max-w-6xl mx-auto'>{children}</div>;
};

export default Container;
