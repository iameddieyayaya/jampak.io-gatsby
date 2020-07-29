import styled from 'styled-components'

const Email = styled.input`
  border-radius: 500px;
  background: #fff
  font-size: 1rem;
  border: none;
  padding: 10px 0 10px 20px;
  width: 20rem;
  color: #000;
  text-align: left;
  outline: none;

  /* Moblie */
  @media (max-width: 425px) {
   width: 85%;
}
`;


export default Email;