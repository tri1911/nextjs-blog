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

import axios from "axios";
import React from "react";

const Slack = () => {
  const [message, setMessage] = React.useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const webhookUrl =
      "https://hooks.slack.com/services/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";

    const data = {
      text: message,
    };

    try {
      let response = await axios.post(webhookUrl, JSON.stringify(data), {
        withCredentials: false,
      });

      console.log(response);

      alert("Message is successfully sent!");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 container mx-auto mt-5">
        <form className="bg-white shadow-md rounded px-8 py-6 mb-4 self-center">
          <label
            htmlFor="message"
            className="block text-gray-700 text-base font-bold mb-2"
          >
            Message
          </label>
          <textarea
            className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="message"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 rounded shadow mt-4 bg-lime-500 hover:bg-lime-400 focus:shadow-outline focus:outline-none text-white font-bold"
            onClick={sendMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Slack;
