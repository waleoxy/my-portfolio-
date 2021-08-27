import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import HomePage from './HomePage';
import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />

    </>
  );
}

export default App;
