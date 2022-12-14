import styled from 'styled-components';
import { List } from 'antd';
import { mediaQueries } from 'src/styles';

export const StyledInfoListItem = styled.div<{ mode: string }>`
  font-size: 1.3rem;
  display: inline-flex;
  align-items: center;
  color: ${({ mode }) =>
    mode === 'light'
      ? ({ theme: { colors } }) => colors.gray2
      : ({ theme: { colors } }) => colors.white};
  transition: all 0.3s ease;

  svg {
    display: inline-block;
    margin-right: 2rem;
    path {
      fill: ${({ mode }) =>
        mode === 'light'
          ? ({ theme: { colors } }) => colors.gray2
          : ({ theme: { colors } }) => colors.white};
      transition: all 0.3s ease;
    }
  }
`;

export const StyledInfoList = styled(List)`
  ul {
    display: flex;
    flex-wrap: wrap;

    ${mediaQueries(599)} {
      margin-bottom: 1rem;
    }

    li {
      width: 50%;
      margin-bottom: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;

      ${mediaQueries(599)} {
        width: 100%;
        margin-bottom: 3rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
