import Link from "next/link";

import ProjectItem from "../../components/projectitem/ProjectItem";

import classes from "../../styles/Projects.module.css";

import projects from "../../lib/projects.list.json";

const Projects = () => {
  return (
    <div className={classes.content}>
      <h1 className="title">projetos</h1>

      {projects.map((project) => {
        return (
          <Link key={project.id} href={`/projects/${project.url}`} passHref>
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
  );
};

export default Projects;
