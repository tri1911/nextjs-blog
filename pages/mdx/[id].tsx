import { GetStaticProps, GetStaticPaths } from "next";
import { POSTS } from "../../posts/mdx";

const Post = ({ slug }) => {
  const Comp = POSTS[slug];
  return <Comp />;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(POSTS).map((id) => ({ params: { id } })),
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
