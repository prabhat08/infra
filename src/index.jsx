import React from "react";
import ReactDOM from "react-dom";
import { hashHistory, Router } from "react-router"
import AppRoutes from './AppRoutes'

ReactDOM.render(<div><Router routes={AppRoutes} history={hashHistory}/></div>, document.getElementById('root'))
