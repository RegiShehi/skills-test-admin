import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';
import Users from './views/Users/Users';
import Layout from './components/Layout/Layout';
import UserProfile from './views/UserProfile/UserProfile';

const App = () => (
  <>
    <NavBar />
    <MainContent>
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Layout exact path="/users" component={Users} />
          <Layout exact path="/users/:id" component={UserProfile} />
        </Switch>
      </Router>
    </MainContent>
  </>
);

export default App;
