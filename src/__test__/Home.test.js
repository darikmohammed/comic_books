import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import renderWithProviders from '../utils/test-utils';
import Home from '../routes/Home';
import Characters from '../Components/Characters';

describe(Home, () => {
  it('Should have the Nav', () => {
    renderWithProviders(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const navHeading = screen.getByText('Disney Characters');
    expect(navHeading).toBeInTheDocument();
  });
});

describe(Characters, () => {
  it('Should have the character header.', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Characters
          name="testing character"
          id={1}
          image="imgsrc"
          tvShows={2}
        />
      </BrowserRouter>,
    );
    const characters = await screen.findByRole('heading', {
      name: /testing character/i,
    });
    expect(characters).toBeInTheDocument();
  });
});
