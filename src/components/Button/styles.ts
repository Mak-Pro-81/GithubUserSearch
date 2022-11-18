import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  font-size: 1.8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border: 0 none;
  border-radius: 1.5rem;
  background-color: ${({ theme: { colors } }) => colors.blue1};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 0 1.5rem;
  min-width: 10rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blue2};
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme: { colors } }) => colors.gray2};
    cursor: not-allowed;
  }
`;
