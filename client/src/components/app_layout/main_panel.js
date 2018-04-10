import React from 'react';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

import Home from '../../containers/home';
import NotFound from '../../containers/not_found';
import About from '../about';
import resource from '../../modules/resource';
import auth from '../../modules/auth';
import PrivateRoute from './private_route';
import MainLayout from './main_layout';

const {ResourcePanel} = resource.containers;
const {AuthPanel} = auth.containers;

const MainPanel = () => (
    <main>
       <Switch>
        <PrivateRoute exact path="/" component={()=>(<MainLayout><Home/></MainLayout>)} />
        <PrivateRoute exact path="/about-us" component={()=>(<MainLayout><About/></MainLayout>)}/>
        <PrivateRoute exact path="/resource" component={()=>(<MainLayout><ResourcePanel/></MainLayout>)} />
        <Route exact path="/login" component={AuthPanel} /> 
        <Route path="/*" component={()=>(<MainLayout><NotFound/></MainLayout>)} /> 
      </Switch>
    </main>
);

MainPanel.propTypes = {
    
};
export default MainPanel;