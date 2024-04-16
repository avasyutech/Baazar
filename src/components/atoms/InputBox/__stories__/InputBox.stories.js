import React from 'react';
import { action } from '@storybook/addon-actions';
import InputBox from '../InputBox';

export default {
    title: 'InputBox',
    component: InputBox,
    tags: ['autodocs'],
};

const Template = (args) => <InputBox {...args} />;
export const Default = Template.bind({});
Default.args = {
    type: 'text',
    id: 'search',
    label: 'Search',
    placeholder: 'Enter your search query',
    handleSearch: action('clicked'),
};
