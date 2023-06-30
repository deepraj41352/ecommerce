import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Register from './Pages/login/Register';
import Login from './Pages/login/Login';
import Account from './Pages/account/Account';
import { useSelector } from 'react-redux';


function App() {
  const isLogin = useSelector((state) => state.auth.isLogin)
  // const CardItem = useSelector((state) => state.cart.CardItem)
  return (
    <>
    {isLogin &&(
     <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
        </Switch>
        <Footer />
    </Router>
    )}
    {!isLogin && (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </Router>
    )}
    </>
  );
}

export default App;
