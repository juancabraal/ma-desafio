import * as types from './actionsType';

import * as UsuarioService from 'services/UsuarioService';

import { showMessage } from 'helpers/utils';

export function getAll() {
	return dispatch => {
		dispatch({ type: types.USARIOS_FETCH_START });

		UsuarioService.getAll()
			.then(response =>
				dispatch({
					type: types.USARIOS_FETCH_SUCCESS,
					payload: response
				})
			)
			.catch(error => {
				showMessage(error);

				dispatch({ type: types.USARIOS_FETCH_FAILED });
			});
	};
}
