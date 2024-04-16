import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputBox from './InputBox';

describe('InputBox', () => {
    it('Rendering InputBox Correctly', () => {
        const { getByLabelText, getByPlaceholderText } = render(
            <InputBox type="text" id="search" label="Search" placeholder="Enter search term" handleSearch={() => {}} />
        );

        expect(getByLabelText('Search')).toBeInTheDocument();
        expect(getByPlaceholderText('Enter search term')).toBeInTheDocument();
    });
});
