import React from 'react';
import './App.css';
import {
  Switch,
  Route, BrowserRouter as Router
} from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Landing} />
        </Switch>
      </main>

    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
