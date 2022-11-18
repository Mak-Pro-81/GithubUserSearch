import { useContext } from 'react';
import { StyledContentBox } from './styles';
import { ThemeContext } from 'src/contexts/ThemeContext';

export const ContentBox = ({ ...args }) => {
  const { themeMode } = useContext(ThemeContext);
  return <StyledContentBox {...args} thememode={themeMode}></StyledContentBox>;
};
