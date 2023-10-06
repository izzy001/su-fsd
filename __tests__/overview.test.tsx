import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Overview from '../src/app/domain/overview/page';

describe('Overview Component', () => {
  test('renders component with initial data', () => {
    render(<Overview />);
    
    // Check if the component renders without errors
    // expect(screen.getByText('Sort Machine')).toBeInTheDocument();
    // expect(screen.getByText('Sort by Created At')).toBeInTheDocument();
    // expect(screen.getByText('Sort by A-Z')).toBeInTheDocument();
    // expect(screen.getByText('Sort by Z-A')).toBeInTheDocument();
  });

  test('sorts items by Created At', () => {
    render(<Overview />);
    
    // Select the 'Sort by Created At' option
    const sortDropdown = screen.getByRole('combobox');
    userEvent.selectOptions(sortDropdown, 'createdAt');

    // Add specific assertions based on your component's behavior
    // For example, check if the items are sorted by Created At
  });

  test('sorts items by A-Z', () => {
    render(<Overview />);
    
    // Select the 'Sort by A-Z' option
    const sortDropdown = screen.getByRole('combobox');
    userEvent.selectOptions(sortDropdown, 'filenameAZ');

    // Add specific assertions based on your component's behavior
    // For example, check if the items are sorted by A-Z
  });

  test('sorts items by Z-A', () => {
    render(<Overview />);
    
    // Select the 'Sort by Z-A' option
    const sortDropdown = screen.getByRole('combobox');
    userEvent.selectOptions(sortDropdown, 'filenameZA');

    // Add specific assertions based on your component's behavior
    // For example, check if the items are sorted by Z-A
  });
});
