import { GetStaticProps, GetStaticPaths } from "next";
import { LoadMDX, loadSlugs } from "../../posts/mdx";

const Post = ({ slug }: { slug: string }) => {
  const Comp = LoadMDX(slug);
  return (
    <div className="blog-article max-w-3xl font-sans block mx-auto my-8 md:my-12 px-4 box-border">
      <Comp />
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = loadSlugs();
  return {
    paths: slugs.map((id) => ({ params: { id } })),
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
