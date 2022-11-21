import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 40.2rem;
  border-radius: 1.5rem;
  z-index: 5000;

  svg {
    width: 14rem;
  }
`;
