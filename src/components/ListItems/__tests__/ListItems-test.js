import React from 'react';
import { shallow } from 'enzyme';
import ListItems from '../ListItems';
import Item from '../Item';

it('ListItems component renders without crashing', () => {
    shallow(<ListItems />);
});

it('Item component renders without crashing', () => {
    shallow(<Item />);
});