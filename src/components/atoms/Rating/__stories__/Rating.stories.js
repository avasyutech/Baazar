import Rating from '../Rating';

export default {
  title: 'Rating',
  component: Rating,
  tags: ['autodocs'],
};

const Template = (args) => <Rating {...args} />

export const Default = Template.bind({})

Default.args = {
  variant: 4.5,
}
