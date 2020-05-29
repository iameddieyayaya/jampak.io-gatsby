import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #28accc;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5em;
  padding: 8.5px 48px;
  border: none;
  border-radius: 500px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transition-duration: 33ms;
  user-select: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #29C1E5;
    transform: scale(1.1)
  }
`;

export default Button;