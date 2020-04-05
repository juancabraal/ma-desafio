import React from 'react';
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Icon,
	IconButton,
} from '@material-ui/core';

import { formatDate } from 'helpers/utils';

export default function ({ usuarios }) {
	function getStatus(status) {
		if (status === 1) {
			return <span className="ativo">ATIVO</span>;
		}

		return 'INATIVO';
	}

	return (
		<div className="table">
			<Table size="small">
				<TableHead className="user-table-head">
					<TableRow>
						<TableCell></TableCell>
						<TableCell>USUÁRIO</TableCell>
						<TableCell>EMAIL</TableCell>
						<TableCell align="center">DATA DE INCLUSÃO</TableCell>
						<TableCell align="center">DATA DE ALTERAÇÃO</TableCell>
						<TableCell align="center">REGRAS</TableCell>
						<TableCell align="center">STATUS</TableCell>
						<TableCell align="right">AÇÕES</TableCell>
					</TableRow>
				</TableHead>
				<TableBody className="user-table-body">
					{usuarios.map((row) => (
						<TableRow key={row.id} className="table-item">
							<TableCell
								className="item-hide-hover"
								padding="checkbox"
							>
								<div className="check-user"></div>
							</TableCell>
							<TableCell className="item-hide-hover">
								{row.usuario}
							</TableCell>
							<TableCell className="item-hide-hover">
								{row.email}
							</TableCell>
							<TableCell
								className="item-hide-hover"
								align="center"
							>
								{formatDate(row.created_at, 'DD/MM/Y')}
							</TableCell>
							<TableCell
								className="item-hide-hover"
								align="center"
							>
								{formatDate(row.updated_at, 'DD/MM/Y')}
							</TableCell>
							<TableCell
								className="item-hide-hover"
								align="center"
							>
								{row.rule}
							</TableCell>
							<TableCell
								className="item-hide-hover"
								align="center"
							>
								{getStatus(row.status)}
							</TableCell>
							<TableCell align="right">
								<IconButton className="item-show-hover">
									<Icon>delete</Icon>
								</IconButton>
								<IconButton className="item-show-hover">
									<Icon>archive</Icon>
								</IconButton>
								<IconButton className="item-show-hover">
									<Icon>security</Icon>
								</IconButton>
								<IconButton className="item-show-hover">
									<Icon>create</Icon>
								</IconButton>
								<IconButton className="item-hide-hover">
									<Icon>more_horiz</Icon>
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
