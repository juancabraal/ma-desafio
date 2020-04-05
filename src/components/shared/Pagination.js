import React from 'react';

import { Button } from '@material-ui/core';

export default function ({ totalRows, rowsPerPage, page }) {
	const totalPages =
		totalRows > rowsPerPage ? Math.ceil(totalRows, rowsPerPage) : 1;

	function isFirstOrPreviousDisabled() {
		return page === 1;
	}

	function isLastOrNextDisabled() {
		return page !== totalPages;
	}

	function rendePages() {
		const pages = [];

		for (let index = 1; index <= totalPages; index++) {
			pages.push(
				<Button
					key={index}
					variant="text"
					className={`page ${index === page ? 'active-page' : ''}`}
				>
					{index}
				</Button>
			);
		}

		return pages;
	}

	return (
		<div className="pagination">
			<Button
				variant="text"
				className="action hide-sm"
				disabled={isFirstOrPreviousDisabled()}
			>
				Primeiro
			</Button>
			<Button
				variant="text"
				className="action"
				disabled={isFirstOrPreviousDisabled()}
			>
				Anterior
			</Button>
			{rendePages()}
			<Button
				variant="text"
				className="action"
				disabled={isLastOrNextDisabled()}
			>
				Próximo
			</Button>
			<Button
				variant="text"
				className="action hide-sm"
				disabled={isLastOrNextDisabled()}
			>
				Último
			</Button>
		</div>
	);
}
