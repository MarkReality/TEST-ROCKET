import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Data_Name from './Data_Name';

const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/data_name" component={Data_Name}/>
        </Switch>
    </BrowserRouter>
}

export default Router;