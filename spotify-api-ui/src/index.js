import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import SpotifyApp from './app/main/SpotifyApp';
import Authorization from "./app/main/Authorization";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path={"/login"} component={Authorization}/>
                <Route exact path={"/"} component={SpotifyApp}/>
                {/*<SpotifyApp />*/}
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

registerServiceWorker();
