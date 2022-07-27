import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function TvShows() {
  const params = useParams();
  const characters = useSelector((state) => state.Disney.characters);
  const filterArray = characters.filter(
    // eslint-disable-next-line no-underscore-dangle
    (character) => character._id === Number(params.id),
  );
  const characterTvShows = filterArray[0].tvShows;

  // console.log(params);
  return (
    <div>
      <h2>Tv shows</h2>
      <img src={filterArray[0].imageUrl} alt={filterArray[0].name} />
      <h3>{filterArray[0].name}</h3>
      {characterTvShows.map((show) => (
        <p key={show}>{show}</p>
      ))}
    </div>
  );
}

export default TvShows;
