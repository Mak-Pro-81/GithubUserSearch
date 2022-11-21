import { Layout } from 'antd';
import styled from 'styled-components';
import { mediaQueries } from 'src/styles';

export const StyledMainInfo = styled(Layout)<{ mode: string }>`
  display: flex;
  flex-wrap: wrap;
  color: ${({ mode }) =>
    mode === 'light'
      ? ({ theme: { colors } }) => colors.gray2
      : ({ theme: { colors } }) => colors.white};
  margin-bottom: 2rem;
  padding: 2rem;

  ${mediaQueries(767)} {
    display: block;
  }

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

  aside {
    ${mediaQueries(767)} {
      width: 100% !important;
      min-width: 1px !important;
      max-width: 100% !important;
    }
  }

  main {
    padding-top: 1rem;
    text-align: right;
    flex: 1;

    ${mediaQueries(767)} {
      width: 100%;
      text-align: left;
      padding-top: 2rem;
    }
  }

  footer {
    width: 100%;
    margin-top: 5rem;

    ${mediaQueries(767)} {
      margin-top: 2rem;
    }
  }
`;
