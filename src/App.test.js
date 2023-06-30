import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import store from './redux/store';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

test('renders welcome header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/DOI Information Fetcher/i);
  expect(headerElement).toBeInTheDocument();
});
