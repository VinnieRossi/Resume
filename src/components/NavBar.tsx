import { Popover, Switch, Transition } from '@headlessui/react';
import {
  MenuIcon,
  ChevronDownIcon,
  XIcon,
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { Fragment } from 'react';

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ darkMode, setDarkMode }: NavBarProps): JSX.Element => {
  const solutions = [
    {
      name: 'Analytics',
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorClickIcon,
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure.",
      href: '#',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: ViewGridIcon,
    },
    {
      name: 'Automations',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: RefreshIcon,
    },
    {
      name: 'Reports',
      description:
        'Get detailed reports that will help you make more informed decisions ',
      href: '#',
      icon: DocumentReportIcon,
    },
  ];
  const resources = [
    {
      name: 'Help Center',
      description:
        'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      name: 'Guides',
      description:
        'Learn how to maximize our platform to get the most out of it.',
      href: '#',
    },
    {
      name: 'Events',
      description:
        'See what meet-ups and other events we might be planning near you.',
      href: '#',
    },
    {
      name: 'Security',
      description: 'Understand how we take your privacy seriously.',
      href: '#',
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Popover className='relative dark:bg-gray-700 '>
      {({ open }) => (
        <>
          <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
            <div>
              <a href='#' className='flex'>
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
              <Popover.Group as='nav' className='flex space-x-10'>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'dark:text-white group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-700 focus:ring-indigo-500'
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-50'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel
                          static
                          className='absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-3xl'
                        >
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-700 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500'
                                >
                                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12'>
                                    <item.icon
                                      className='w-6 h-6'
                                      aria-hidden='true'
                                    />
                                  </div>
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900 dark:text-white'>
                                      {item.name}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500 dark:text-white'>
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className='p-5 bg-gray-50 dark:bg-gray-800 sm:p-8'>
                              <a
                                href='#'
                                className='flow-root p-3 -m-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600'
                              >
                                <div className='flex items-center '>
                                  <div className='text-base font-medium text-gray-900 dark:text-white'>
                                    Enterprise
                                  </div>
                                  <span className='dark:text-indigo-100 dark:bg-indigo-800 ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800'>
                                    New
                                  </span>
                                </div>
                                <p className='mt-1 text-sm text-gray-500 dark:text-white'>
                                  Empower your entire team with even more
                                  advanced tools.
                                </p>
                              </a>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <a
                  href='#'
                  className='text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:bg-gray-700'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white'
                >
                  Docs
                </a>

                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white'
                        )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel
                          static
                          className='absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'
                        >
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-700 sm:gap-8 sm:p-8'>
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='block p-3 -m-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-500'
                                >
                                  <p className='text-base font-medium text-gray-900 dark:text-white'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-gray-500 dark:text-white'>
                                    {item.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
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
              className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'
            >
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
                  <div className='mt-6'>
                    <nav className='grid gap-6'>
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500'
                        >
                          <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md'>
                            <item.icon className='w-6 h-6' aria-hidden='true' />
                          </div>
                          <div className='ml-4 text-base font-medium text-gray-900 dark:text-white'>
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className='px-5 py-6'>
                  <div className='grid grid-cols-2 gap-4'>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white '
                    >
                      Pricing
                    </a>

                    <a
                      href='#'
                      className='text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white'
                    >
                      Docs
                    </a>

                    <a
                      href='#'
                      className='text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white'
                    >
                      Enterprise
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-indigo-200'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
