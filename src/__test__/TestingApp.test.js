import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import renderWithProviders from '../utils/test-utils';
import Home from '../routes/Home';
import Characters from '../Components/Characters';
import App from '../App';

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

describe(App, () => {
  it('Should Have the search Field', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const searchField = screen.getByPlaceholderText('Search ....');
    expect(searchField).toBeInTheDocument();
  });
  it('Should have the characters', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const charac = await screen.findByText('Abigail');
    expect(charac).toBeInTheDocument();
  });
  it('Should Have the search Field', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const searchField = screen.getByPlaceholderText('Search ....');
    await userEvent.type(searchField, 'test');
    expect(searchField.value).toBe('test');
  });
});
