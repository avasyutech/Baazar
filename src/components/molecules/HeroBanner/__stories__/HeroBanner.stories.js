import HeroBanner from '../HeroBanner';

export default {
    title: 'HeroBanner',
    component: HeroBanner,
    tags: ['autodocs'],
};

const Template = (args) => <HeroBanner {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'primary',
}
