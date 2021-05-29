import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';
import Users from './views/Users/Users';
import Layout from './components/Layout/Layout';
import UserDetails from './views/UserDetails/UserDetails';
import NewUser from './views/NewUser/NewUser';

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
          <Layout exact path="/users/add" component={NewUser} />
          <Layout exact path="/users/:id" component={UserDetails} />
        </Switch>
      </Router>
    </MainContent>
  </>
);

export default App;
