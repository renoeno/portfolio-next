import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

import styles from "./Contacts.module.scss";

const Contacts = (props) => {
  let classes = props.color === "white" ? "contactWhite" : "contactBlack";
  return (
    <ul className={styles.contacts}>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/renoeno/">
          <AiOutlineGithub className={`${styles.contact} ${styles[classes]}`} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/renoalmeida/"
        >
          <AiOutlineLinkedin
            className={`${styles.contact} ${styles[classes]}`}
          />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="mailto:renoalm@gmail.com">
          <AiOutlineMail className={`${styles.contact} ${styles[classes]}`} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/renoenoenoeno/"
        >
          <AiOutlineInstagram
            className={`${styles.contact} ${styles[classes]}`}
          />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
