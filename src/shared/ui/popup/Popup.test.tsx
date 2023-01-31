import { render, screen } from '@testing-library/react';

import Popup from './index';

test('Renders the popup', () => {
  render(<div data-testid="popup"><Popup title="My popup" show={true} /></div>);
  const el = screen.getByTestId('popup');

  expect(el).toBeInTheDocument();
});

test('Renders closed popup', () => {
  render(<div data-testid="popup"><Popup title="My popup" show={false} /></div>);
  const el = screen.getByTestId('popup');

  expect(el).not.toHaveClass('overlay--state-visible');
});
