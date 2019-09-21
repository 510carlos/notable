import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Doctor from './Doctor';

const DoctorsRoutes = ({match}) => (
    <Switch>
        <Route path={`${match.url}doctor/:id`} component={Doctor} />
    </Switch>
);

export default withRouter(DoctorsRoutes);