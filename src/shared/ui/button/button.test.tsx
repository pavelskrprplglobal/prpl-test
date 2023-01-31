import { render, screen, fireEvent } from '@testing-library/react';

import Button, { EButtonThemes } from './index';

test('Renders the button', () => {
  render(<Button text="My cool button" />);
  const el = screen.getByText(/My cool button/i);
  expect(el).toBeInTheDocument();
});

test('Renders the primary button', () => {
  render(<Button text="My cool button" theme={EButtonThemes.PRIMARY} />);
  const el = screen.getByText(/My cool button/i);
  expect(el).toHaveClass('button--state-primary');
});

test('Renders the secondary button', () => {
  render(<Button text="My cool button" theme={EButtonThemes.SECONDARY} />);
  const el = screen.getByText(/My cool button/i);
  expect(el).toHaveClass('button--state-secondary');
});

test('Renders the danger button', () => {
  render(<Button text="My cool button" theme={EButtonThemes.DANGER} />);
  const el = screen.getByText(/My cool button/i);
  expect(el).toHaveClass('button--state-danger');
});

test('Renders button click', () => {
  const spy = jest.fn();

  render(<Button text="My cool button" theme={EButtonThemes.DANGER} onClick={spy} />);
  const el = screen.getByText(/My cool button/i);

  fireEvent.click(el);

  expect(spy).toHaveBeenCalled();
});
