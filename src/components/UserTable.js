import React, { useState } from 'react';
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Checkbox,
	Icon,
	IconButton
} from '@material-ui/core';

import { formatDate } from 'helpers/utils';

export default function({ usuarios }) {
	const [selected, setSelected] = useState([]);

	function onChangeSelected(event) {
		const id = parseInt(event.target.value);

		let selectedArray = [...selected];

		if (selected.includes(id)) {
			selectedArray = selectedArray.filter(value => value !== id);
		} else {
			selectedArray.push(id);
		}

		setSelected(selectedArray);
	}

	function getStatus(status) {
		if (status === 1) {
			return <span className="ativo">ATIVO</span>;
		}

		return 'INATIVO';
	}

	return (
		<Table size="small">
			<TableHead stickyHeader className="user-table-head">
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
				{usuarios.map(row => (
					<TableRow key={row.id} className="table-item">
						<TableCell padding="checkbox">
							<Checkbox
								checked={selected.indexOf(row.id) >= 0}
								onChange={onChangeSelected}
								value={row.id}
								name="userSelected"
							/>
						</TableCell>
						<TableCell>{row.usuario}</TableCell>
						<TableCell>{row.email}</TableCell>
						<TableCell align="center">
							{formatDate(row.created_at, 'DD/MM/Y')}
						</TableCell>
						<TableCell align="center">
							{formatDate(row.updated_at, 'DD/MM/Y')}
						</TableCell>
						<TableCell align="center">{row.rule}</TableCell>
						<TableCell align="center">
							{getStatus(row.status)}
						</TableCell>
						<TableCell align="right">
							<IconButton>
								<Icon>delete</Icon>
							</IconButton>
							<IconButton>
								<Icon>archive</Icon>
							</IconButton>
							<IconButton>
								<Icon>security</Icon>
							</IconButton>
							<IconButton>
								<Icon>create</Icon>
							</IconButton>
							<IconButton>
								<Icon>more_horiz</Icon>
							</IconButton>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
