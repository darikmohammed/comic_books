import styled from 'styled-components';

const Container = styled.div`
  border: 0.5px solid #4a67aa;
  color: #fff;
  text-align: end;
  position: relative;
  padding: 0.5rem;
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    img {
      opacity: 0.5;
      width: 80%;
      height: 60%;
      align-self: center;
      justify-self: center;
    }
    svg {
      position: absolute;
      top: 0;
      right: 0;
    }
    .disc {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      position: absolute;
      margin-top: 2rem;
      bottom: 0.5rem;
      right: 1rem;
    }
  }
`;

export default Container;
