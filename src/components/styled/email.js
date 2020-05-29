import styled from 'styled-components'

const Email = styled.input`
  border-radius: 500px;
  background: rgba(0,0,0, .875);
  font-size: 1rem;
  border: none;
  padding: 20px 0 20px 40px;
  width: 600px;
  color: white;
  text-align: left;
  outline: none;

  /* Moblie */
  @media (max-width: 425px) {
   width: 100%;
}
`;


export default Email;