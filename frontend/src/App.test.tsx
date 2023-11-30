import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {

  it('should render the Orders Link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render the App Link', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('should render the Home Link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: "Home"})).toBeInTheDocument();
  });

  it('should render the Home Header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
  
});
