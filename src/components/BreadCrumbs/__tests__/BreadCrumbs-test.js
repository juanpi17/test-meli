import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from '../BreadCrumbs';

it('ItemDetails component renders without crashing', () => {
    shallow(<Breadcrumbs />);
});