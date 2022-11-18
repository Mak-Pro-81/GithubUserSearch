import styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Title: StyledTitle } = Typography;

export const Title = styled(StyledTitle)`
  font-weight: 700;
  ${props => {
    switch (props.level) {
      case 1:
        return css`
          font-size: 4rem;
        `;
      case 2:
        return css`
          font-size: 3rem;
        `;
      case 3:
        return css`
          font-size: 2rem;
        `;
      case 4:
        return css`
          font-size: 1.8rem;
        `;
      case 5:
        return css`
          font-size: 1.6rem;
        `;
    }
  }}
`;
