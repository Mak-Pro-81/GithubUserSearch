import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledMainInfo = styled(Layout)<{ mode: string }>`
  display: flex;
  flex-wrap: wrap;
  color: ${({ mode }) =>
    mode === 'light'
      ? ({ theme: { colors } }) => colors.gray2
      : ({ theme: { colors } }) => colors.white};
  margin-bottom: 2rem;
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
    color: ${({ mode }) =>
      mode === 'light'
        ? ({ theme: { colors } }) => colors.black
        : ({ theme: { colors } }) => colors.white};
    transition: all 0.3s ease;
  }

  h3 {
    color: ${({ theme: { colors } }) => colors.blue1};
  }

  main {
    padding-top: 1rem;
    text-align: right;
    flex: 1;
  }

  footer {
    width: 100%;
    margin-top: 5rem;
  }
`;
