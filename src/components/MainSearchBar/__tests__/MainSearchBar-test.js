import React from 'react';
import { shallow } from 'enzyme';
import MainSearchBar from '../MainSearchBar';

it('renders without crashing', () => {
    shallow(<MainSearchBar />);
});