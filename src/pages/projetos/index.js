import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

import Header from "../../components/header/Header";

import { fadeInUpOpY, stagger } from "../../animations/Animations";

import ProjectItem from "../../components/projectitem/ProjectItem";

import styles from "../../styles/Projects.module.scss";

import projects from "../../../lib/projects.list.json";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projetos</title>
        <meta name="description" content="Projetos de Reno Almeida" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        <motion.div variants={stagger}>
          <motion.div variants={fadeInUpOpY} className={styles.content}>
            {projects.map((project) => {
              return (
                <Link
                  key={project.id}
                  href={`/projetos/${project.url}`}
                  passHref
                  prefetch
                >
                  <ProjectItem
                    key={project.id}
                    id={project.id}
                    url={project.image}
                    title={project.title}
                    tags={project.tags}
                  />
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
