import React from 'react';
import Footer from 'components/Footer';
import { shallow } from 'enzyme';

it('render without crash', () => {
	shallow(<Footer />);
});
