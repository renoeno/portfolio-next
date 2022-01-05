import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

import classes from "./ProjectItem.module.css";

const ProjectItem = React.forwardRef(({ onClick, href, ...props }, ref) => {
  return (
    <div
      href={href}
      onClick={onClick}
      ref={ref}
      className="image-link"
      key={props.key}
    >
      <div className={classes.container}>
        <div className={classes.projectHover}>
          <div className={classes.projectTitle}>
            <h2 className="project-title">{props.title}</h2>
            {props.tags.map((tag) => {
              return (
                <h3 className="tag" key={props.key}>
                  {tag}
                </h3>
              );
            })}
          </div>
        </div>
        <div className={classes.projectPicture}>
          <Image
            src={props.url}
            width="1200"
            height="600"
            alt="Project Image"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
});

ProjectItem.displayName = "ProjectItem";

export default ProjectItem;
