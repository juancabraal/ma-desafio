import React, { useState } from 'react';
import {
	Button,
	Icon,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@material-ui/core';

export default function({ onMenu }) {
	const [filterVisibility, setVisibility] = useState({
		inclusao: true,
		alteracao: true,
		ativoInativo: true
	});

	function changeVisibility(filterName) {
		let filters = { ...filterVisibility };

		filters[filterName] = !filters[filterName];

		setVisibility(filters);
	}

	return (
		<div className="backdrop">
			<div className="sidemenu">
				<div className="header">
					<div className="header-content">
						<div className="filtro-title">
							<Icon>filter_list</Icon>
							<h4>FILTROS</h4>
						</div>
						<div className="grow"></div>
						<Button
							className="icon icon-white icon-shadow br-10"
							onClick={() => onMenu()}
						>
							<Icon>close</Icon>
						</Button>
					</div>
				</div>
				<div className="sidemenu-content">
					<div className="description">
						Utilize os filtros abaixo para refinar os resultados da
						tabela, clique no botão APLICAR para salvar as
						alterações
					</div>

					<div className="horiz-separator" />

					<ul className="filter-itens">
						<li className="filter-item">
							<button
								className="item-header"
								onClick={() => changeVisibility('inclusao')}
							>
								<Icon>date_range</Icon>
								<div>TODAS AS DATAS DE INCLUSÃO</div>
								<Icon>arrow_drop_down</Icon>
							</button>
							{filterVisibility.inclusao && (
								<div className="item-content">
									<div className="field">
										<TextField
											label="Inicio"
											placeholder="00/00/0000"
											InputLabelProps={{ shrink: true }}
										/>
									</div>
									<Icon>arrow_forward</Icon>
									<div className="field">
										<TextField
											label="Término"
											placeholder="00/00/0000"
											InputLabelProps={{ shrink: true }}
										/>
									</div>
								</div>
							)}
						</li>
						<li className="filter-item">
							<button
								className="item-header"
								onClick={() => changeVisibility('alteracao')}
							>
								<Icon>date_range</Icon>
								<div>TODAS AS DATAS DE ALTERAÇÃO</div>
								<Icon>arrow_drop_down</Icon>
							</button>
							{filterVisibility.alteracao && (
								<div className="item-content">
									<div className="item-content">
										<div className="field">
											<TextField
												label="Inicio"
												placeholder="00/00/0000"
												InputLabelProps={{
													shrink: true
												}}
											/>
										</div>
										<Icon>arrow_forward</Icon>
										<div className="field">
											<TextField
												label="Término"
												placeholder="00/00/0000"
												InputLabelProps={{
													shrink: true
												}}
											/>
										</div>
									</div>
								</div>
							)}
						</li>
						<li className="filter-item">
							<button
								className="item-header"
								onClick={() => changeVisibility('ativoInativo')}
							>
								<Icon>hdr_strong</Icon>
								<div>ATIVOS E INATIVOS</div>
								<Icon>arrow_drop_down</Icon>
							</button>
							{filterVisibility.ativoInativo && (
								<div className="item-radios">
									<RadioGroup
										row
										name="position"
										defaultValue="ativo"
									>
										<FormControlLabel
											value="ativo"
											control={<Radio color="primary" />}
											label="Ativo"
										/>
										<FormControlLabel
											value="inativo"
											control={<Radio color="primary" />}
											label="Inativo"
										/>
									</RadioGroup>
								</div>
							)}
						</li>
					</ul>
					<Button
						variant="outlined"
						color="primary"
						size="large"
						className="filter-apply"
					>
						Aplicar
					</Button>
				</div>
			</div>
		</div>
	);
}
