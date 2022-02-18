import { getAllPostIds } from '../../lib/posts-mdx';
import { GetStaticProps, GetStaticPaths } from 'next';

import FirstPost from '../../posts/mdx/pre-rendering.mdx';
import SecondPost from '../../posts/mdx/ssg-ssr.mdx';

const Post = ({ PostComp }) => {
  return PostComp;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['pre-rendering', 'ssg-ssr'],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdx = {
    ['pre-rendering']: FirstPost,
    ['ssg-ssr']: SecondPost,
  };
  return {
    props: {
      PostCom: mdx[params.id as string],
    },
  };
};
