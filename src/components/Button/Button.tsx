import { FC, ReactNode } from 'react';
import { StyledButton } from './styles';
import { tButton } from 'src/types';

export const Button = ({ type, children, disabled }: tButton) => {
  return (
    <StyledButton htmlType={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
