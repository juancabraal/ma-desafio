import React from 'react';
import Pagination from 'components/shared/Pagination';
import { shallow } from 'enzyme';

it('render without crash', () => {
	shallow(<Pagination />);
});
