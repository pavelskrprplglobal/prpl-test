import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField from '../shared/ui/text-field';

export default {
  title: 'Example/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

const defaultLabel = 'My text field';
const defaultPlaceholder = 'Type here...';

export const Default = Template.bind({});
Default.args = {
  label: defaultLabel,
  placeholder: defaultPlaceholder,
};
