import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import { GlobalStyle } from "./style.js";
import { FontFace } from "../../statics/icon/iconfont";
import store from "../../store";
import Home from "../../pages/home";
import Detail from "../../pages/detail/loadable.js";
import Login from "../../pages/login";
import Write from "../../pages/write/";

class JianshuIndex extends Component {
	render() {
		return (
			<Fragment>
				<Provider store = { store }>
					<div>
						<GlobalStyle />
						<FontFace />
						<BrowserRouter>
							<Header></Header>
							<Switch>
								<Route path = "/" exact component = { Home }></Route>
								<Route path = "/login" exact component = { Login }></Route>
								<Route path = "/detail/:id" exact component = { Detail }></Route>
								<Route path = "/write" exact component = { Write }></Route>
							</Switch>
						</BrowserRouter>
					</div>
				</Provider>
			</Fragment>
			)
	}
}

export default JianshuIndex;