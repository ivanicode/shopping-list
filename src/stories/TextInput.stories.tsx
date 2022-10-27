import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from '../components/TextInput/TextInput';

export default {
    title: 'TextInput',
    component: TextInput
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  addItem: () => undefined,
};