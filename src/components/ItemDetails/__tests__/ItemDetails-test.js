import React from 'react';
import { shallow } from 'enzyme';
import ItemDetails from '../ItemDetails';

it('ItemDetails component renders without crashing', () => {
    shallow(<ItemDetails />);
});