import React from "react";
import styles from './styles.module.scss';

import introImage from '../../img/introImg.png';

export default class IntroSlide extends React.Component {
  render() {
    return (
      <section className={styles.introSection}>
        <header className={styles.header}>
          <h1 className={styles.title}> the mental health directory </h1>
        </header>
        <section className={styles.mainContent}>
          <figure className={styles.intoFigure}>
            <img src={introImage} />
          </figure>
          <section className={styles.blurb}>
            <h1> Finding the Resources You Need For a Brighter Day Shouldn't Be Hard </h1>
          </section>
        </section>
      </section>
    );
  }
}
