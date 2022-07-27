import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Characters from '../Components/Characters';
import Navbar from '../Components/Navbar';
import GetDisney from '../Redux/Disney/GetDisney';

import Container from './Styles/Home.style';

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.Disney.characters);
  useEffect(() => {
    dispatch(GetDisney());
  }, []);
  return (
    <div>
      <Navbar heading="Disney Characters" />
      <Container>
        {characters.map((character) => (
          <Characters
            /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
            key={character._id}
            name={character.name}
            id={character._id}
            image={character.imageUrl}
            tvShows={character.tvShows.length}
          />
        ))}
      </Container>
    </div>
  );
}

export default Home;
