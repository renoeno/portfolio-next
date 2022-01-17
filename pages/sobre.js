import Image from "next/image";
import Head from "next/head";

import Contacts from "../components/contacts/Contacts";
import Header from "../components/header/Header";

import classes from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Sobre Reno Almeida" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className={classes.content}>
        <div className={classes.personal}>
          <div className={classes.picture}>
            <Image
              src="/picture.jpg"
              width="180"
              height="210"
              alt="Foto pessoal"
              priority={true}
            />
          </div>
          <Contacts />
        </div>
        <p className="content-text">
          Meu nome é Reno Almeida e sou desenvolvedor e pesquisador. Sou
          graduado em Sistemas e Mídias Digitais pela UFC, onde desenvolvi
          diversos projetos e me foquei em trabalhos na interseção entre
          tecnologia, arte e design. Sou mestre em Artes também pela UFC, e
          pesquisei a relação entre dados e ferramentas de controle,
          desenvolvendo um conjunto de projetos (web, eletrônico, foto,
          performance...) que problematizam o assunto. Curso doutorado em
          Comunicação pela UFPE, ao mesmo tempo que desenvolvo projetos
          (especialmente web) que põem em prática minha formação
          interdisciplinar. Acima você encontra diferentes links para contato.
        </p>
      </div>
    </>
  );
};

export default About;
