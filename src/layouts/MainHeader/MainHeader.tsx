import { ReactNode } from 'react';
import { StyledMainHeader } from './styles';

interface IMainHeader {
  children: ReactNode;
}

export const MainHeader = ({ children }: IMainHeader) => {
  return <StyledMainHeader>{children}</StyledMainHeader>;
};
