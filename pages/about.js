import Image from "next/image";

import Contacts from "../components/contacts/Contacts";

import classes from "../styles/About.module.css";

const About = () => {
  return (
    <div className={classes.content}>
      <div className={classes.personal}>
        <div className={classes.picture}>
          <Image
            src="/picture.jpg"
            width="180"
            height="210"
            alt="Personal picture"
            priority={}
          />
        </div>
        <div className={classes.contacts}>
          <h1 className="title">sobre</h1>
          <Contacts />
        </div>
      </div>
      <p className="content-text">
        Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo
        commodo, ut interdum diam laoreet. Sed non consequat odio.Interagi no
        mé, cursus quis, vehicula ac nisi.Mauris nec dolor in eros commodo
        tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de
        capivaris, leite de mula manquis sem cabeça. Aenean aliquam molestie
        leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais
        interessantis.Posuere libero varius. Nullam a nisl ut ante blandit
        hendrerit. Aenean sit amet nisi.Praesent vel viverra nisi. Mauris
        aliquet nunc non turpis scelerisque, eget.
      </p>
    </div>
  );
};

export default About;
