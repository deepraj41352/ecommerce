import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/header';


function App() {
  return (
    <>
     <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
