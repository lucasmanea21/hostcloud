import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {Switch, Route } from 'react-router-dom'
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch> 
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact' component={Contact} />
    </Switch>
  );
}

export default App;
