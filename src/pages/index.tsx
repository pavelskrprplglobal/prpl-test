import { lazy } from 'react';
import { Routes, Route } from 'react-router';

/**
 *
 * Import pages with lazy loading.
 * Define all the new pages here.
 *
 */
const HomePage = lazy(() => import('./home'));
const ProfilePage = lazy(() => import('./profile'));
const NotFoundPage = lazy(() => import('./not-found'));

interface IRoute {
  path: string;
  element: JSX.Element,
}

interface IRoutes {
  [routeName: string]: IRoute,
}

export enum ERoutes {
  HOME = 'home',
  PROFILE = 'profile',
}

export const ROUTES: IRoutes = {
  [ERoutes.HOME]: {
    path: '/',
    element: <HomePage />,
  },
  [ERoutes.PROFILE]: {
    path: '/profile',
    element: <ProfilePage />,
  },
};

export const Routing = () => {
  return (
    <Routes>
      {Object.keys(ROUTES).map((routeName) => (
        <Route key={routeName} path={ROUTES[routeName].path} element={ROUTES[routeName].element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
