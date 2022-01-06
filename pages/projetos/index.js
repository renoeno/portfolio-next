import Link from "next/link";
import Head from "next/head";

import ProjectItem from "../../components/projectitem/ProjectItem";

import classes from "../../styles/Projects.module.css";

import projects from "../../lib/projects.list.json";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projetos</title>
        <meta name="description" content="Projetos de Reno Almeida" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={classes.content}>
        <h1 className="title">projetos</h1>

        {projects.map((project) => {
          return (
            <Link key={project.id} href={`/projetos/${project.url}`} passHref>
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
      </div>
    </>
  );
};

export default Projects;
