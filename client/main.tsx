import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <div>Home!</div>,
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
