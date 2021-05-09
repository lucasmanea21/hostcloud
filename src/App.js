import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {Switch, Route, useLocation} from 'react-router-dom'
import Services from './pages/Services';
import Contact from './pages/Contact';
import {useEffect,Fragment} from 'react'

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <Fragment> 
    <ScrollToTop />
    <Switch> 
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact' component={Contact} />
    </Switch>
    </Fragment>
  );
}

export default App;
