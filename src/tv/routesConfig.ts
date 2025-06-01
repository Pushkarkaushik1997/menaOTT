import { lazy } from 'react';
import { PATHS } from 'src/tv/routesPaths';

const Home = lazy(() => import('src/tv/Pages/Home/Home'));
const Detail = lazy(() => import('src/tv/Pages/Details/Detail'));
const PageNotFound = lazy(() => import('src/tv/Pages/NotFound/PageNotFound'))
const Settings = lazy(() => import('src/tv/Pages/Settings/Settings'))
const Plans = lazy(() => import('src/tv/Pages/Plans/Plans'))
interface RouteConfig {
    path: string;
    element: React.LazyExoticComponent<React.ComponentType<any>>;
}

const routesConfig: RouteConfig[] = [
    { path: PATHS.HOME, element: Home },
    { path: PATHS.DETAIL, element: Detail },
    { path: PATHS.PLAYER, element: PageNotFound },
    { path: PATHS.SETTINGS, element: Settings },
    { path: PATHS.PLANS, element: Plans }
    // Add more routes as needed
];

export default routesConfig;
