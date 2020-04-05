import React from 'react';

import { Icon, TextField, InputAdornment, Button } from '@material-ui/core';

export default function ({ onMenu }) {
	return (
		<div className="header">
			<div className="header-content">
				<Button className="icon icon-shadow gd-icon br-15">
					<Icon>bar_chart</Icon>
				</Button>
				<div className="separator hide-sm"></div>
				<Button className="icon icon-white icon-shadow br-10 hide-sm">
					<Icon>security</Icon>
				</Button>
				<Button className="icon icon-shadow gd-icon br-10 hide-sm">
					<Icon>person</Icon>
				</Button>
				<form className="search-form" noValidate autoComplete="off">
					<TextField
						label="Pesquisar..."
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Icon>search</Icon>
								</InputAdornment>
							),
						}}
					/>
				</form>
				<div className="grow"></div>
				<Button
					className="icon icon-white icon-shadow br-10"
					onClick={() => onMenu()}
				>
					<Icon>filter_list</Icon>
				</Button>
				<Button
					variant="contained"
					color="primary"
					startIcon={<Icon>person</Icon>}
					className="add-user hide-sm"
				>
					INCLUIR USUÁRIO
				</Button>
				<div className="separator hide-sm"></div>
				<div className="settings-buttons hide-sm">
					<Button className="icon br-10">
						<Icon>home</Icon>
					</Button>
					<Button className="icon br-10">
						<Icon>settings</Icon>
					</Button>
					<Button className="icon br-10">
						<Icon>power_settings_new</Icon>
					</Button>
				</div>
			</div>
		</div>
	);
}
