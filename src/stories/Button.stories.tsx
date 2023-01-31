import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { EButtonThemes } from '../shared/ui/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    theme: {
      options: Object.values(EButtonThemes),
      mapping: Object.values(EButtonThemes),
      control: {
        type: 'select',
        labels: Object.keys(EButtonThemes),
      },
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const defaultText = 'Button';

export const Primary = Template.bind({});
Primary.args = {
  text: defaultText,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: defaultText,
  theme: EButtonThemes.SECONDARY,
};

export const Danger = Template.bind({});
Danger.args = {
  text: defaultText,
  theme: EButtonThemes.DANGER,
};
