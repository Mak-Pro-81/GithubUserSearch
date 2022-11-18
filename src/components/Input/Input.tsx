import { forwardRef, ReactNode, ForwardedRef, Ref } from 'react';
import { StyledInput } from './styles';
import { InputProps } from 'antd';

interface IProps extends InputProps {
  placeholder?: string;
  prefix?: ReactNode | string;
}

export const Input = forwardRef<HTMLInputElement, IProps>(({ placeholder, ...props }, ref) => {
  return <StyledInput placeholder={placeholder} {...props} />;
});

Input.displayName = 'Input';
