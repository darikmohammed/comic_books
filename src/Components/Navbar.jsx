import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonIcon from '@mui/icons-material/Person';
import Container from './Styles/Navbar.style';

function Navbar({ heading }) {
  return (
    <Container>
      <Link to="/">
        <ArrowBackIosIcon />
      </Link>
      <p className="NavHeading">{heading}</p>
      <PersonIcon />
    </Container>
  );
}

export default Navbar;

Navbar.propTypes = {
  heading: PropTypes.string.isRequired,
};
