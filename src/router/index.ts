import React, {ComponentType} from 'react';
import Login from '../pages/Login';
import Event from "../pages/Event";

export interface IRoute {
    path: string,
    component: ComponentType,
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event}
];

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
];