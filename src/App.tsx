import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';
import Users from './views/Users/Users';

const App = () => (
  <>
    <NavBar />
    <MainContent>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </MainContent>
  </>
);

export default App;
