import Image from "next/image";
import Head from "next/head";

import Contacts from "../components/contacts/Contacts";

import { fadeInUpOp } from "../animations/Animations";

import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Sobre Reno Almeida" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        <motion.div variants={fadeInUpOp} className={styles.content}>
          <div className={styles.personal}>
            <div className={styles.picture}>
              <Image
                src="/picture.jpg"
                width="180"
                height="210"
                alt="Foto pessoal"
                priority={true}
              />
            </div>
            <Contacts color="black" />
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
            <p>
              Este site foi feito utilizando o framework NextJS, Sass e Framer
              Motion.
            </p>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
