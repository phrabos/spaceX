import React from 'react';
import ShipsContainer from '../ships/ShipsContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ShipsDetailContainer from '../ships/ShipsDetailContainer';

function App(): JSX.Element {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<ShipsContainer />
					</Route>
					<Route exact path="/:id">
						<ShipsDetailContainer />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
