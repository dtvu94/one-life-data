import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import OneLifeData from './pages/OneLifeData';
import NotFound from './pages/NotFound';
import License from './pages/License';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import Docs from './pages/Docs';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: 'one-life-data/:dataId',
    loader: function ({ params }) {
      return params.dataId;
    },
    element: <OneLifeData />,
  },
  {
    path: '/license',
    element: <License />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/security',
    element: <Security />,
  },
  {
    path: '/docs',
    element: <Docs />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
