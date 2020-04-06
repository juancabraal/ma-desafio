import React from 'react';
import Sidemenu from 'components/shared/Sidemenu';
import { shallow } from 'enzyme';

it('render without crash', () => {
	shallow(<Sidemenu />);
});
