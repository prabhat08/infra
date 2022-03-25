import React from "react";
import ReactDOM from "react-dom";
import { hashHistory, Router } from "react-router"
import AppRoutes from './app/AppRoutes'

ReactDOM.render(<Router routes={AppRoutes} history={hashHistory}/>, document.querySelector('.app-container'))
