import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon, { EIcons } from '../shared/ui/icon';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: Object.values(EIcons),
      mapping: Object.values(EIcons),
      control: {
        type: 'select',
        labels: Object.keys(EIcons),
      },
    }
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const defaultIcon = 'react';

export const Default = Template.bind({});
Default.args = {
  name: defaultIcon,
};
