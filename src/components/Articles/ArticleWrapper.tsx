interface IArticleWrapperProps {
  children: JSX.Element;
}

const ArticleWrapper = ({ children }: IArticleWrapperProps): JSX.Element => {
  return (
    <section className='flex justify-center p-8 dark:bg-gray-700'>
      <article className='max-w-5xl prose dark:text-white'>{children}</article>
    </section>
  );
};

export default ArticleWrapper;
