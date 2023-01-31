import { render, screen, fireEvent } from '@testing-library/react';

import Dropdown from './index';
import {EIcons} from '../icon';

const DropdownStaticItems = [
  {
    value: 'React',
    icon: EIcons.REACT,
  },
  {
    value: 'Airplay',
    icon: EIcons.AIRPLAY,
  },
  {
    value: 'Android',
    icon: EIcons.ANDROID,
  },
];

test('Renders the dropdown', () => {
  render(<Dropdown items={DropdownStaticItems} placeholder="Choose" />);
  const el = screen.getByText(/Choose/i);
  const react = screen.getByText(/React/i);
  const airplay = screen.getByText(/Airplay/i);
  const android = screen.getByText(/Android/i);

  expect(el).toBeInTheDocument();
  expect(react).toBeInTheDocument();
  expect(airplay).toBeInTheDocument();
  expect(android).toBeInTheDocument();
});
