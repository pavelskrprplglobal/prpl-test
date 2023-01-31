import { render, screen, fireEvent } from '@testing-library/react';

import TextField from './index';

test('Renders the text field', () => {
  render(<TextField label="My cool text field" placeholder="Put text here" />);
  const el = screen.getByText(/My cool text field/i);
  const placeholder = screen.getByPlaceholderText(/Put text here/i);

  expect(placeholder).toBeInTheDocument();

  fireEvent.change(placeholder, { target: { value: '123' } });

  const value = screen.getByDisplayValue(/123/i);

  expect(el).toBeInTheDocument();

  expect(value).toBeInTheDocument();
});
