import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contact" component={ Contact } />
    </BrowserRouter>
  );
}

export default App;
