import { useHistory } from 'react-router-dom';

const TechArticlesLandingPage = (): JSX.Element => {
  const history = useHistory();

  const posts = [
    {
      title: 'Article One',
      url: '/article-one',
      category: {
        name: 'Article',
        url: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      readingTime: '6 min',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      url: '#',
      category: {
        name: 'Video',
        url: '#',
        color: 'bg-pink-100 text-pink-800',
      },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      readingTime: '4 min',
    },
    {
      title: 'Improve your customer experience',
      url: '#',
      category: {
        name: 'Case Study',
        url: '#',
        color: 'bg-green-100 text-green-800',
      },
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      readingTime: '11 min',
    },
  ];

  const navigateToArticle = (post: any) => {
    history.push(`/articles${post.url}`);
  };

  return (
    <div className='px-4 pt-16 pb-20 bg-white dark:bg-gray-700 dark:text-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
            Recent publications
          </h2>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4 dark:text-white'>
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>

          <p>todo: add a randomizer button</p>
        </div>
        <div className='grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => (
            <div key={post.title}>
              <a
                onClick={() => {
                  navigateToArticle(post);
                }}
                className='block mt-4'
              >
                <p className='text-xl font-semibold text-gray-900 dark:text-white'>
                  {post.title}
                </p>
                <p className='mt-3 text-base text-gray-500 dark:text-white'>
                  {post.description}
                </p>
              </a>
              <div className='flex items-center mt-6'>
                <div className='flex space-x-1 text-sm text-gray-500 dark:text-white'>
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden='true'>&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechArticlesLandingPage;
