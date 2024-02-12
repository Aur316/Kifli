import type { NextPage } from "next";
import Head from "next/head";
import HeadLine from "../components/Headline/HeadLine";
import localeData from "../locales/descriptions.json";
import Action from "../components/action/Action";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Főoldal - Kifli.Tech</title>
        <meta name="Kifli" content="Email subscriber" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <HeadLine
        title={localeData.headlineTitle}
        description={localeData.headlineDescription}
        img="/headline/headline.png"
      />
      <br />
      <br />
      <Action
        title={localeData.actionTitle}
        description={localeData.actionDescription}
        placeholder={localeData.actionPlaceholder}
      />
    </div>
  );
};

export default Home;
