import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteProps {
  component: any;
  path: string;
  exact?: boolean;
}

const Layout: React.FC<IProps> = ({ component: Component, path, exact = false }) => {
  const renderComponent = (props: RouteComponentProps) => {
    const { history, location, match } = props;

    return <Component history={history} location={location} match={match} />;
  };

  return <Route exact={exact} path={path} render={(props) => renderComponent(props)} />;
};

export default Layout;
