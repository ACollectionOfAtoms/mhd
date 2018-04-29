import React from "react";
import styles from './styles.module.scss';


export default class ValueProp1Slide extends React.Component {
  render() {
    return (
      <section className={styles.valuePropSection}>
          <figure className={styles.figure}>
            <div className={styles.computer}></div>
          </figure>
          <section className={styles.mainContent}>
            <header className={styles.header}>
              <h1 className={styles.title}> Let’s Eliminate the Black Hole of Google Searches </h1>
            </header>
            <section className={styles.blurb}>
              <p> The Mental Health Directory will make it easier to discover a variety of helpful resources in one organized location such as: </p>
              <ul className={styles.resourceList}>
                <li>Hospitals</li>
                <li>Addiction Centers</li>
                <li>Housing Advice</li>
                <li>Legal Services</li>
                <li>Therapists/Counselors</li>
                <li>Help Centers</li>
                <li>Organizations</li>
                <li>Blogs/Podcasts</li>
              </ul>
            </section>
        </section>
      </section>
    );
  }
}
