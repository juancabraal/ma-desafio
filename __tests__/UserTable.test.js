import React from 'react';
import UserTable from 'components/UserTable';
import { shallow } from 'enzyme';

describe('USE TABLE COMPONENT', () => {
	let wrapper;
	let zeroUsers = [];
	let oneUser = [
		{
			id: 6,
			usuario: 'ANPINA',
			email: 'antonio.pina@g.globo',
			created_at: '2019-05-28',
			updated_at: '2019-05-30',
			rule: '01',
			status: 1,
		},
	];

	it('render without crash with 0 user', () => {
		wrapper = shallow(<UserTable usuarios={zeroUsers} />);

		expect(wrapper.length).toEqual(1);
		expect(wrapper.find('.table-item')).toHaveLength(0);
	});

	it('render without crash with 1 user', () => {
		wrapper = shallow(<UserTable usuarios={oneUser} />);

		expect(wrapper.length).toEqual(1);
		expect(wrapper.find('.table-item')).toHaveLength(1);
	});
});
