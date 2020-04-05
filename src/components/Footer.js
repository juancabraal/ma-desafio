import React, { useReducer, useEffect } from 'react';

import { Icon } from '@material-ui/core';

import moment from 'moment';

import 'moment/locale/pt-br';

moment().locale('pt-br');

export default function () {
	const [cronometer, dispatch] = useReducer((state = moment(), action) => {
		if (action.type === 'add') return moment();
		return state;
	});

	useEffect(() => {
		const timer = window.setInterval(() => {
			dispatch({ type: 'add' });
		}, 1000);

		return () => {
			window.clearInterval(timer);
		};
	}, []);

	function getDate() {
		const diaSemana = moment().format('dddd');
		const diaMes = moment().format('DD');
		const mes = moment().format('MMMM');
		const ano = moment().format('Y');

		return `${diaSemana}, ${diaMes} de ${mes} de ${ano}`;
	}

	return (
		<div className="footer">
			<div className="live">
				<Icon className="icon">radio_button_checked</Icon>
				<span>NO AR</span>
			</div>
			<div className="footer-content">
				<div className="location spacing hide-sm">
					<Icon className="icon">tv</Icon>
					<span>ENCONTRO - 10:00</span>
				</div>
				<div className="update spacing hide-sm">
					<Icon className="icon">update</Icon>
					<span>
						Última atualização em {moment().format('HH:mm')}
					</span>
				</div>
				<div className="grow"></div>
				<div className="date spacing hide-sm">
					<span>{getDate()}</span>
				</div>
				<div className="cronometer">
					{`// ${cronometer ? cronometer.format('HH:mm:ss') : ''}`}
				</div>
			</div>
		</div>
	);
}
