import React from 'react';

import { CircularProgress, Icon, IconButton } from '@material-ui/core';

export default function({ isLoading, hasError, onPress }) {
	if (isLoading) {
		return (
			<div className="loading">
				<CircularProgress color="primary" size={80} />
			</div>
		);
	}

	return (
		<div className="fetch-error">
			<IconButton onClick={() => onPress()}>
				<Icon color="primary">replay</Icon>
			</IconButton>
			<div className="title">Tentar novamente</div>
		</div>
	);
}
