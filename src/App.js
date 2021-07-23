import Home from './pages/Home'
import './App.css';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>

      <Switch> 

        <Route
          path={'/'}
          render={props=> <Home {...props}/>}
        />
        
      </Switch>

    </Router>
  );
}

export default App;
