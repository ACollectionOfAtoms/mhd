import React from "react";
import styles from './styles.module.scss';

export default class IntroSlide extends React.Component {
  render() {
    return (
      <section className={styles.introSection}>
        <h1 className={styles.title}> the mental health directory </h1>
      </section>
    );
  }
}
