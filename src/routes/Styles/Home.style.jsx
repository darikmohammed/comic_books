import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #2c3d65;
`;
export const SearchInput = styled.input`
  padding: 0.5rem;
  width: 90%;
  margin: 0.3rem;
  font-size: 15px;
  border-radius: 10px;
  border: none;
`;

export default Container;
