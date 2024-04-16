import ViewAll from '../ViewAll';

export default {
  title: 'ViewAll',
  component: ViewAll,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['orange', 'blue', 'yellow', 'black'],
    },
  },
};

const Template = (args) => <ViewAll {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'browse all product',
  variant: 'orange',
}
