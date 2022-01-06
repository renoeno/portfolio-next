import Head from "next/head";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

import Image from "next/image";

import classes from "../../styles/Project.module.css";

import projects from "../../lib/projects.list.json";

const Project = (props) => {
  const router = useRouter();
  const projectTitle = router.query.projectTitle;

  const project = props.projects.find(
    (project) => project.url === projectTitle
  );

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className={classes.content}>
        <div className={classes.titles}>
          <h1 className="title">{project.title}</h1>
          <h2 className="subtitle">{project.year}</h2>
          <div className={classes.info}>
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              className={classes.link}
            >
              {project.video === undefined
                ? "Visitar o site"
                : "Visitar o repositório no github"}
            </a>

            <div className={classes.tags}>
              {project.tags.map((tag) => (
                <h3 className="subtitle" key={project.key}>
                  {tag}
                </h3>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.description}>
          <p>{project.description}</p>
        </div>
        {project.video !== undefined ? (
          <div className={classes.playerWrapper}>
            <ReactPlayer
              className={classes.reactPlayer}
              url={project.video}
              style={{ margin: "0 auto" }}
              width="100%"
              height="100%"
              controls={false}
            />
          </div>
        ) : (
          <Image
            src={project.imagehd}
            width="1200"
            height="600"
            alt="Project Image"
            priority={true}
          />
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: projects.map((project) => ({
      params: { projectTitle: project.url },
    })),
  };
}

export async function getStaticProps(context) {
  const projectTitle = context.params.projectTitle;
  // selectedProject = projects.find((project) => project.title === projectTitle);

  return {
    props: {
      projects,
    },
  };
}

export default Project;
