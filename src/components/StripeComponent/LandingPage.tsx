import { useState } from 'react';
import { NavBar } from '../NavBar';

const LandingPage = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <article className='dark:bg-gray-700 dark:text-white'>
        <div>text</div>
      </article>
    </div>
  );
};

export default LandingPage;
