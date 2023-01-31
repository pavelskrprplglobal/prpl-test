import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from '../shared/ui/dropdown';
import {EIcons} from "../shared/ui/icon";

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const defaultPlaceholder = 'Choose something';

const defaultItems = [
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

export const Default = Template.bind({});
Default.args = {
  placeholder: defaultPlaceholder,
  items: defaultItems,
};
