import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 1px;
  .dis {
    background-color: #4a67aa;
    padding: 1rem;
  }
  .heading {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #4a67aa;
    padding: 1rem;
    img {
      opacity: 0.7;
    }
  }

  .shows {
    display: flex;
    flex-direction: column;
    .show {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      border: 0.5px solid #4a67aa;
      &:nth-child(even) {
        background-color: #4a67aa;
        border: 0.5px solid #2c3d65;
      }
    }
  }
`;

export default Container;
