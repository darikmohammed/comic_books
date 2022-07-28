import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Container from './Styles/Characters.style';

function Characters({
  name, id, image, tvShows,
}) {
  return (
    <Container>
      <Link to={`/tvshows/${id}`}>
        <img src={image} alt="" />
        <ArrowCircleRightIcon />
        <div className="disc">
          <h3>{name}</h3>
          <p>
            {tvShows}
            {' '}
            Tv Shows
          </p>
        </div>
      </Link>
    </Container>
  );
}

export default Characters;

Characters.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tvShows: PropTypes.number.isRequired,
};
