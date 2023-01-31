import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PopupInput from '../widgets/popup-input';

export default {
  title: 'Example/Popup',
  component: PopupInput,
  argTypes: {},
} as ComponentMeta<typeof PopupInput>;

const Template: ComponentStory<typeof PopupInput> = (args) => <PopupInput />;

export const Default = Template.bind({});
Default.args = {};
