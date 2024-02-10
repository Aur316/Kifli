import type { NextPage } from "next";
import Head from "next/head";
import ButtonWithIcon from "../components/buttons/buttonWithIcon/ButtonWithIcon";
import SimpleButton from "../components/buttons/simpleButton/SimpleButton";
import Input from "../components/input/Input";
import ButtonWithBackGround from "../components/buttons/buttonWithBackGround/ButtonWithBackGround";
import HeadLine from "../components/Headline/HeadLine";
import localeData from "../locales/descriptions.json";
import Action from "../components/action/Action";

const Home: NextPage = () => {
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div>
      <Head>
        <title>Kifli</title>
        <meta name="Kifli" content="Email subscriber" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ButtonWithIcon text={"Button"} onClick={handleIconClick} icon={"+"} />
      <br /> <br />
      <SimpleButton text={"Button text"} onClick={handleIconClick} />
      <br />
      <br />
      <Input placeholder={"Placeholder"} />
      <br />
      <br />
      <ButtonWithBackGround text={"Button"} onClick={handleIconClick} />
      <br />
      <br /> */}
      <HeadLine
        title={localeData.headlineTitle}
        description={localeData.headlineDescription}
        img="/headline/headline.png"
      />
      <Action
        title={localeData.actionTitle}
        description={localeData.actionDescription}
        placeholder={localeData.actionPlaceholder}
      />
    </div>
  );
};

export default Home;
