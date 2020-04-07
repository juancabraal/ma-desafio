import * as types from './actionsType';

const INITIAL_STATE = {
	isLoading: true,
	hasError: false,
	data: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.USARIOS_FETCH_START:
			return { ...state, isLoading: true, hasError: false };
		case types.USARIOS_FETCH_FAILED:
			return { ...state, isLoading: false, hasError: true };
		case types.USARIOS_FETCH_SUCCESS:
			return { data: action.payload, isLoading: false, hasError: false };
		default:
			return state;
	}
}
