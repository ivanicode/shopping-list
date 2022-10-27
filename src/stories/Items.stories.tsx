import { ComponentStory, ComponentMeta } from '@storybook/react';
import Items from '../components/Items/Items';

export default {
    title: 'Items',
    component: Items
} as ComponentMeta<typeof Items>;

const Template: ComponentStory<typeof Items> = (args) => <Items {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    list: [{textValue: "tomato"}],
    deleteItem: () => undefined,
};
