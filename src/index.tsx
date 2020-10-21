import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { deepMerge } from 'grommet/utils';
import { Grommet, grommet } from 'grommet';

const myTheme = deepMerge(grommet, {
	global: {
		colors: {
			brand: '#d64541',
			facebook: '#007fff',
			instagram: '#E00086'
		},
		font: {
			family: 'Jost'
		},
		anchor: {
			color: {
				dark: 'green',
				light: 'light-1'
			}
		}
	}
});

ReactDOM.render(
	<React.StrictMode>
		<Grommet theme={myTheme} full>
			<App />
		</Grommet>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
