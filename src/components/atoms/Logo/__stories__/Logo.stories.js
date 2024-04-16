import Logo from '../Logo';

export default {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['orange', 'black'],
    },
  },
};

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Bazaar',
  variant: 'orange',
}
