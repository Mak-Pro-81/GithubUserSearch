import styled from 'styled-components';
import { Avatar } from 'antd';

export const StyledAvatar = styled(Avatar)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  overflow: hidden;

  img {
    width: 100%;
    max-width: 14rem;
    border-radius: 50%;
  }
`;
