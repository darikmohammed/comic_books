import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Characters({
  name, id, image, tvShows,
}) {
  return (
    <div>
      <Link to={`/tvshows/${id}`}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{tvShows}</p>
      </Link>
    </div>
  );
}

export default Characters;

Characters.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tvShows: PropTypes.number.isRequired,
};
