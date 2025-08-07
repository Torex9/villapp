import Container from '../01-atoms/Container';
import { PropsWithChildren } from 'react';

export interface HeroProps {}

export const Hero: React.FC<PropsWithChildren<HeroProps>> = (props) => {
  return (
    <div className="bg-alpha-light-300 py-24">
      <Container>{props.children}</Container>
    </div>
  );
};
