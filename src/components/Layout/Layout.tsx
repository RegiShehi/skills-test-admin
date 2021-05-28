import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
  component: any;
  path: string;
  exact?: boolean;
}

const Layout: React.FC<IProps> = ({ component: Component, path, exact = false }) => (
  <Route exact={exact} path={path} render={() => <Component />} />
);

export default Layout;
