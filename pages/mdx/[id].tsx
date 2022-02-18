import { GetStaticProps, GetStaticPaths } from 'next';

import FirstPost from '../../posts/mdx/pre-rendering.mdx';
import SecondPost from '../../posts/mdx/ssg-ssr.mdx';

const POSTS = {
  ['pre-rendering']: FirstPost,
  ['ssg-ssr']: SecondPost,
};

const Post = ({ slug }) => {
  const Comp = POSTS[slug];
  return <Comp />;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'pre-rendering',
        },
      },
      {
        params: {
          id: 'ssg-ssr',
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params.id,
    },
  };
};
