import styled from 'styled-components';
import { Avatar } from 'antd';
import { mediaQueries } from 'src/styles';

export const StyledAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  ${mediaQueries(599)} {
    justify-content: flex-start;
  }

  ${mediaQueries(499)} {
    justify-content: center;
  }

  & > span {
    &:not(.ant-avatar) {
      display: inline-block;
      width: 100%;
      max-width: 14rem;
      position: relative;
      min-width: 14rem;
      height: 14rem;

      ${mediaQueries(599)} {
        min-width: 30rem;
        max-width: 30rem;
        height: 30rem;
      }
    }
  }

  .react-loading-skeleton {
    height: 100%;
  }
`;

export const StyledAvatar = styled(Avatar)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 14rem;

  ${mediaQueries(599)} {
    justify-content: flex-start;
  }

  ${mediaQueries(499)} {
    justify-content: center;
  }

  overflow: hidden;

  img {
    width: 100%;
    max-width: 14rem;
    border-radius: 50%;

    ${mediaQueries(599)} {
      max-width: 30rem;
    }
  }
`;
