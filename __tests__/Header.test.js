import React from 'react';
import Header from 'components/Header';
import { shallow } from 'enzyme';

it('render without crash', () => {
	shallow(<Header />);
});
