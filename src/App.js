// library 3rd party things after the components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import FourOhFour from "./pages/FourOhFour";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <>      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// mydrama.com/ => Component A
// mydrama.com/welcome => if this <Route path="/welcome"/> becomes active => Load Welcome Component
// mydrama.com/products => if this <Route path="/products"/> becomes active => Load Products Component
// mydrama.com/yoon => Component B
