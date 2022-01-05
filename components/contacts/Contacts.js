import Image from "next/image";
import Link from "next/link";

import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <ul className={classes.contacts}>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/renoeno/">
          <Image
            className="image-link"
            src="/github.svg"
            width="25"
            height="25"
            alt="Github icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/renoalmeida/"
        >
          <Image
            className="image-link"
            src="/linkedin.svg"
            width="25"
            height="25"
            alt="Linkedin icon"
          />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="mailto:renoalm@gmail.com">
          <Image
            className="image-link"
            src="/gmail.svg"
            width="25"
            height="25"
            alt="Gmail icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/renoenoenoeno/"
        >
          <Image
            className="image-link"
            src="/instagram.svg"
            width="25"
            height="25"
            alt="Instagram icon"
          />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
