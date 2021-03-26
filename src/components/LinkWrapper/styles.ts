import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 1100;
  cursor: pointer;

  position: fixed;
  top: var(--medium);
  right: var(--medium);
  color: var(--color-white);

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--color-highlight);
    }
  }
`
