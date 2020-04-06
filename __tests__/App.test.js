import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

it('render without crash', () => {
	shallow(<App />);
});
