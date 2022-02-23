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

/*
const Wrapper = ({ children }) => {
  return (
    <div className="w-80 min-h-fit p-3 rounded-lg bg-gradient-to-b from-sky-700 to-sky-900">
      {children}
    </div>
  );
};

const Display = ({ children }) => {
  return (
    <div className="w-full h-28 mb-3 py-0 px-4 bg-sky-800 rounded-lg flex flex-col items-end justify-around text-white box-border">
      {children}
    </div>
  );
};

const ButtonBox = ({ children }) => {
  return <div className="w-full flex flex-wrap gap-2">{children}</div>;
};

const Button = ({ value, onClick }) => {
  return (
    <button
      className="flex-auto w-1/4 h-14 border-none bg-lime-600 hover:bg-lime-400 text-2xl text-white font-semibold uppercase cursor-pointer rounded-lg outline-none"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const btnValues = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ["-", 0, "+"], ["clear"]];

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Wrapper>
        <Display>
          <div className="text-5xl font-semibold">Total</div>
          <div className="text-2xl font-normal">Current</div>
        </Display>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return <Button key={i} value={btn} onClick={() => {}} />;
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
};
*/

import Calculator from "../calculator";

const Home = () => {
  return <Calculator />;
};

export default Home;
