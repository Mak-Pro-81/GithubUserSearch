import { ReactNode } from 'react';
import { StyledInfoListItem } from './styles';

interface IInfoListItem {
  icon: ReactNode | string;
  text: string;
  mode: string;
}

export const InfoListItem = ({ icon, text, mode }: IInfoListItem) => {
  return (
    <StyledInfoListItem mode={mode}>
      {icon} {text}
    </StyledInfoListItem>
  );
};
