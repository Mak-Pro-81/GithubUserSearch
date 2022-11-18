import styled from 'styled-components';
import { List } from 'antd';

export const StyledStatisticsListItem = styled.div<{ mode: string }>`
  position: relative;
  font-size: 2.6rem;
  font-weight: 700;
  transition: all 0.3s ease;
  span {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
    text-transform: capitalize;
    color: ${({ mode }) =>
      mode === 'light'
        ? ({ theme: { colors } }) => colors.gray2
        : ({ theme: { colors } }) => colors.white};
    transition: all 0.3s ease;
  }
`;

export const StyledStatisticsList = styled(List)<{ mode: string }>`
  background-color: ${({ mode }) =>
    mode === 'light'
      ? ({ theme: { colors } }) => colors.gray1
      : ({ theme: { colors } }) => colors.gray6};
  border-radius: 1.5rem;
  padding: 2rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: calc(100% / 3);
    }
  }
`;
