import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router/";

const AppRouter = () => {
    const auth = true;

    return (
        auth
            ? <Switch>
                {
                    privateRoutes.map( route => <Route
                            key={route.path}
                            {...route}
                        />
                    )
                }
                <Redirect to={RouteNames.EVENT} />
            </Switch>

            : <Switch>
                {
                    publicRoutes.map( route => <Route
                            key={route.path}
                            {...route}
                        />
                    )
                }
                <Redirect to={RouteNames.LOGIN} />
            </Switch>
    );
};

export default AppRouter;