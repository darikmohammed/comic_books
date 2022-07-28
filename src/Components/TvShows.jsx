import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import Navbar from './Navbar';

import Container from './Styles/TvShows.style';

function TvShows() {
  const params = useParams();
  const characters = useSelector((state) => state.Disney.characters);
  const filterArray = characters.filter(
    // eslint-disable-next-line no-underscore-dangle
    (character) => character._id === Number(params.id),
  );
  const characterTvShows = filterArray[0].tvShows;

  return (
    <div>
      <Navbar heading={`${filterArray[0].name} Tv Shows`} />
      <Container>
        <div className="heading">
          <img src={filterArray[0].imageUrl} alt={filterArray[0].name} />
          <h3>{filterArray[0].name}</h3>
        </div>
        <div className="dis">
          <h3>Tv Shows</h3>
        </div>
        <div className="shows">
          {characterTvShows.map((show) => (
            <div className="show" key={show}>
              <p>{show}</p>
              <CircleIcon />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TvShows;
