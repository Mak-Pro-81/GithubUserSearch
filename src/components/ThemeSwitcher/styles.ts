import styled from 'styled-components';
import { theme } from './../../styles/theme';

export const StyledThemeSwitcher = styled.div<{ mode: string }>`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ mode }) => (mode === 'dark' ? theme.colors.white : theme.colors.gray2)};
  transition: all 0.3s ease;

  svg {
    display: inline-block;
    margin-left: 2rem;

    path {
      transition: all 0.3s ease;
      fill: ${({ mode }) => (mode === 'dark' ? theme.colors.white : theme.colors.gray2)};
    }
  }
`;
