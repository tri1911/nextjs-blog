/*
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { loadSlugs, LoadMDXMeta } from "../posts/mdx";

export default function Home({ allSlugs }: { allSlugs: string[] }) {
  const allPostsData: { slug: string; title: string; date: string }[] =
    allSlugs.map((slug) => {
      const metaData = LoadMDXMeta(slug);
      return { slug, ...metaData };
    });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="text-3xl font-bold">
          Hello, I'm Elliot. I'm a software developer.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ slug, title, date }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`/mdx/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allSlugs = loadSlugs();
  return {
    props: {
      allSlugs,
    },
  };
};
*/

import Calculator from "../components/calculator";

const Home = () => {
  return <Calculator />;
};

export default Home;
