import Badge from '../Badge';

export default {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['hot', 'discount', 'sale', 'soldOut', 'bestDeals'],
    },
    label: {
      control: { type: 'radio' },
      options: ['hot', 'discount', 'sale', 'soldOut', 'bestDeals'],
    },
  },
};

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Hot',
  variant: 'hot',
}
