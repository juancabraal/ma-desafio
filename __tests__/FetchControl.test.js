import React from 'react';
import FetchControl from 'components/shared/FetchControl';
import { shallow } from 'enzyme';

it('render without crash', () => {
	shallow(<FetchControl />);
});
