import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Apointments from './components/Apointments';

const DoctorsRoutes = ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}doctor/:id`} component={Apointments} />
        </Switch>
    )
};

export default withRouter(DoctorsRoutes);