import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutMe } from './components/AboutMe';
import ArticleLandingPage from './components/TechArticlesLandingPage';
import { NavBar } from './components/common/NavBar';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { SideProjects } from './components/SideProjects';
import { ArticleOne } from './components/Articles/ArticleOne';

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <main className={darkMode ? 'dark' : ''}>
        <DarkModeProvider value={darkMode}>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* Pull out articles into separate router */}
          <Switch>
            <Route path='/articles/article-one'>
              <ArticleOne />
            </Route>
            <Route path='/articles'>
              <ArticleLandingPage />
            </Route>
            <Route path='/side-projects'>
              <SideProjects />
            </Route>
            <Route path='/'>
              <AboutMe />
            </Route>
          </Switch>
        </DarkModeProvider>
      </main>
    </Router>
  );
};

export default App;
