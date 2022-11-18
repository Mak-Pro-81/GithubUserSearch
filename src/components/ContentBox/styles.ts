import styled from 'styled-components';
import { Card } from 'antd';

export const StyledContentBox = styled(Card)<{ thememode: string }>`
  margin: 1.5rem 0 3rem;
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
  background-color: ${props =>
    props.thememode === 'light'
      ? ({ theme: { colors } }) => colors.white
      : ({ theme: { colors } }) => colors.gray5};
  box-shadow: ${props =>
    props.thememode === 'light' ? ({ theme: { colors } }) => colors.shadow : 'unset'};
  transition: all 0.3s ease;
`;
