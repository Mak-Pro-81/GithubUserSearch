import { ReactNode } from 'react';
import { StyledMainContainer } from './styles';

interface IMainContainer {
  children: ReactNode;
  maxWidth?: string;
}

export const MainContainer = ({ children, maxWidth, ...props }: IMainContainer) => {
  return (
    <StyledMainContainer maxWidth={maxWidth} {...props}>
      {children}
    </StyledMainContainer>
  );
};
