import React from 'react';

import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';

import configureStore from './store';

import AppNavigation from 'routes/index';

import theme from 'theme/material';

const App = () => (
	<Provider store={configureStore()}>
		<ThemeProvider theme={theme}>
			<AppNavigation />
		</ThemeProvider>
	</Provider>
);

export default App;
