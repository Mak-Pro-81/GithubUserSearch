import styled from 'styled-components';

export const StyledMainContainer = styled.main<{
  maxWidth?: string;
}>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}rem`};
  margin: 0 auto;
  padding: 0 1.5rem;
`;
