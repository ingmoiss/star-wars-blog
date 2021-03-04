import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import injectContext from "./store/appContex";


import { Navbar } from "./components/navbar.jsx";
import { Home } from "./views/home.js";
import { PeopleDetail } from "./views/peopleDescription.jsx";
import { PlanetDetail } from "./views/planetDescription.jsx";
import { Flooter } from "./components/flooter";
import { SingUp } from "./views/sing_up.jsx"
import { LogIn } from "./views/log_in.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar/>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route exact path="/people/:theid">
							<PeopleDetail/>
						</Route>
                        <Route exact path="/planet/:theid">
							<PlanetDetail/>
						</Route>
						<Route exact path="/sing_up/">
							<SingUp/>
						</Route>
						<Route exact path="/log_in/">
							<LogIn/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Flooter/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
