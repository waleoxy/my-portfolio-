import './App.css';
import About from './components/About';
import HomePage from './HomePage';
import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
      </Switch>

    </>
  );
}

export default App;
