import React from 'react';

import { mount, shallow } from 'enzyme';

import { Provider } from 'react-redux';

import configureStore from '../src/store';

import Home from 'views/Home';

import FetchControl from 'components/shared/FetchControl';

import Sidemenu from 'components/shared/Sidemenu';

import UserTable from 'components/UserTable';

import * as types from 'store/usuarios/actionsType';

describe('HOME VIEW', () => {
	let store = configureStore(),
		wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Provider store={store}>
				<Home />
			</Provider>
		).dive();

		// component = shallow(<Home />);
	});

	it('render FetchControl on start', () => {
		expect(wrapper.find(FetchControl)).toBeDefined();
		expect(wrapper.find(UserTable)).toMatchObject({});
	});

	it('render FetchControl on error', () => {
		store.dispatch({ type: types.USARIOS_FETCH_FAILED });

		expect(wrapper.find(FetchControl)).toBeDefined();
		expect(wrapper.find(UserTable)).toMatchObject({});
	});

	it('not render FetchControl on success', () => {
		store.dispatch({ type: types.USARIOS_FETCH_SUCCESS, payload: [] });

		expect(wrapper.find(FetchControl)).toMatchObject({});

		expect(wrapper.find(UserTable)).toBeDefined();
	});

	it('not render Sidemenu', () => {
		expect(wrapper.find(Sidemenu)).toMatchObject({});
	});
});
