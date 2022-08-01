import Help from './components/HelpPage'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/'><Help/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
