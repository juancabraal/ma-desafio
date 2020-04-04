import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import Header from 'components/Header';

import UserTable from 'components/UserTable';

import FetchControl from 'components/shared/FetchControl';

import Pagination from 'components/shared/Pagination';

import Sidemenu from 'components/shared/Sidemenu';

import { getAll } from 'store/usuarios/actions';
import Footer from 'components/Footer';

export default function() {
	const dispatch = useDispatch();

	const [showMenu, setShowMenu] = useState(false);

	const { isLoading, hasError, data: usuarios } = useSelector(
		state => state.usuarios
	);

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	function fetchUsuarios() {
		dispatch(getAll());
	}

	useEffect(() => {
		fetchUsuarios();
	}, []);

	function renderTable() {
		if (isLoading || hasError) {
			return (
				<div className="content">
					<FetchControl
						isLoading={isLoading}
						hasError={hasError}
						onPress={() => fetchUsuarios()}
					/>
				</div>
			);
		}

		return (
			<div className="content">
				<UserTable usuarios={usuarios} />
				<Pagination
					page={1}
					rowsPerPage={10}
					totalRows={usuarios.length}
				/>
			</div>
		);
	}

	return (
		<div className="container">
			<Header onMenu={() => toggleMenu()} />
			<CSSTransition
				in={showMenu}
				timeout={300}
				classNames="sidemenu-animation"
				unmountOnExit
			>
				<Sidemenu onMenu={() => toggleMenu()} />
			</CSSTransition>
			{renderTable()}
			<Footer />
		</div>
	);
}
