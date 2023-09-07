import React from 'react';
import { render, screen } from '@testing-library/react';
// import { Button } from './Button';
import MainPage from './MainPage';

describe('svg test', () => {
  test('render svg', () => {
    render(<MainPage />);
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });
});
