import { render, screen } from '@testing-library/react';
import MobileApp from './mobile/mobileApp';

test('renders learn react link', () => {
  render(<MobileApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
