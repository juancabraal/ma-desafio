import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';

import UserTable from 'components/UserTable';

import FetchControl from 'components/shared/FetchControl';

import { getAll } from 'store/usuarios/actions';

export default function() {
	const dispatch = useDispatch();

	const { isLoading, hasError, data: usuarios } = useSelector(
		state => state.usuarios
	);

	function fetchUsuarios() {
		dispatch(getAll());
	}

	useEffect(() => {
		fetchUsuarios();
	}, []);

	function renderTable() {
		if (isLoading || hasError) {
			return (
				<FetchControl
					isLoading={isLoading}
					hasError={hasError}
					onPress={() => fetchUsuarios()}
				/>
			);
		}

		return (
			<div className="content">
				<UserTable usuarios={usuarios} />
			</div>
		);
	}

	return (
		<div className="container">
			<Header />
			{renderTable()}
		</div>
	);
}
