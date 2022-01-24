import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

import styles from "./BurguerMenu.module.scss";

import Contacts from "../contacts/Contacts";

const easing = [0.6, 0, 0.1, 0.99];

const variants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easing } },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.8, ease: easing },
  },
};

export function BurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  let openClasses = `${styles.openIcon}`;

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  const clickButtonHandler = (event) => {
    event.preventDefault();

    setIsOpen(!isOpen);

    if (isOpen) {
      openClasses = `${styles.openIcon}`;
    } else {
      openClasses = `${styles.openIcon} closed`;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <motion.div
          initial="closed"
          className={styles.content}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <a href="" onClick={clickButtonHandler}>
            <IoMdClose className={styles.closeIcon} />
          </a>
          <motion.div
            className={styles.mainNav}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <Link href="/">
              <a
                className={`${
                  asPath === "/" ? styles.active : styles.inactive
                }`}
              >
                home
              </a>
            </Link>
            <Link href="/projetos">
              <a
                className={`${
                  asPath === "/projetos" ? styles.active : styles.inactive
                }`}
              >
                projetos
              </a>
            </Link>
            <Link href="/sobre">
              <a
                className={`${
                  asPath === "/sobre" ? styles.active : styles.inactive
                }`}
              >
                sobre
              </a>
            </Link>
          </motion.div>
          <div className={styles.contacts}>
            <Contacts color="white" />
          </div>
        </motion.div>

        <motion.div animate={isOpen ? "closed" : "open"} variants={variants}>
          <a href="" onClick={clickButtonHandler}>
            <AiOutlineMenu className={styles.openIcon} />
          </a>
        </motion.div>
      </div>
    </>
  );
}
