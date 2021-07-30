import { Popover, Switch, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ darkMode, setDarkMode }: NavBarProps): JSX.Element => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/');
  };

  const navigateToArticles = () => {
    history.push('/articles');
  };

  const navigateToSideProjects = () => {
    history.push('/side-projects');
  };

  return (
    <Popover className='relative dark:bg-gray-700 '>
      {({ open }) => (
        <>
          <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
            <div>
              <a onClick={navigateToHome} className='flex cursor-pointer'>
                <span className='sr-only'>Workflow</span>
                <img
                  className='w-auto h-8 sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt=''
                />
              </a>
            </div>
            <div className='flex -my-2 -mr-2 md:hidden'>
              <div className='inline m-2 '>
                <Switch
                  title='Dark Mode'
                  checked={darkMode}
                  onChange={setDarkMode}
                  className={`${
                    darkMode ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                  <span className='sr-only'>Dark Mode</span>
                  <span
                    className={`${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
              <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-800'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
              <nav className='flex space-x-10'>
                <a
                  onClick={navigateToHome}
                  className='text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white dark:bg-gray-700'
                >
                  About Me
                </a>
                <a
                  onClick={navigateToArticles}
                  className='text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white dark:bg-gray-700'
                >
                  Tech Articles
                </a>
                <a
                  onClick={navigateToSideProjects}
                  className='text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white'
                >
                  Side Projects
                </a>
              </nav>
              <Switch
                title='Dark Mode'
                checked={darkMode}
                onChange={setDarkMode}
                className={`${
                  darkMode ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className='sr-only'>Dark Mode</span>
                <span
                  className={`${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
                />
              </Switch>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              static
              className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden'
            >
              {({ close }) => (
                <div className='bg-white divide-y-2 rounded-lg shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5 divide-gray-50 dark:divide-gray-800'>
                  <div className='px-5 pt-5 pb-6'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <img
                          className='w-auto h-8'
                          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                          alt='Workflow'
                        />
                      </div>
                      <div className='-mr-2'>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-800'>
                          <span className='sr-only'>Close menu</span>
                          <XIcon className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className='px-5 py-6'>
                    <div className='grid grid-cols-2 gap-4'>
                      <a
                        onClick={() => {
                          navigateToHome();
                          close();
                        }}
                        className='text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white dark:bg-gray-700'
                      >
                        About Me
                      </a>
                      <a
                        onClick={() => {
                          navigateToArticles();
                          close();
                        }}
                        className='text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white dark:bg-gray-700'
                      >
                        Tech Articles
                      </a>
                      <a
                        onClick={() => {
                          navigateToSideProjects();
                          close();
                        }}
                        className='text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white'
                      >
                        Side Projects
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
