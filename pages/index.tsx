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

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="output">
          <div className="current">current</div>
          <div className="total">total</div>
        </div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <br />
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <br />
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <br />
        <button>+</button>
        <button>0</button>
        <button>-</button>
        <br />
        <button className="span-three">clear</button>
      </div>
    </>
  );
};

export default Home;
