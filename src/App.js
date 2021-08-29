import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import HomePage from './HomePage';
import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import WorkPage from './WorkPage';
import SkillsSetPage from './SkillsSetPage';
import ToolsPage from './ToolsPage';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/works" component={WorkPage} />
        <Route path="/skills" component={SkillsSetPage} />
        <Route path="/tools" component={ToolsPage} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />

    </>
  );
}

export default App;
