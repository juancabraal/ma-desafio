import { toastr } from 'react-redux-toastr';

import moment from 'moment';

export function showMessage(message) {
	toastr.info(message);
}

export function formatDate(date, format) {
	return moment(date).format(format);
}
