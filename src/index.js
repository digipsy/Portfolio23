import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ProjectPage from "./pages/ProjectPage";
import reportWebVitals from './reportWebVitals';

import { PureComponent } from "react";

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  render = () => this.props.children
}

export default ScrollIntoView;

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollIntoView><App /></ScrollIntoView> ,
  },
  {
    path: "projectPage",
    element: <ProjectPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance test functions

// to log results (for example: reportWebVitals(console.log))

reportWebVitals();

