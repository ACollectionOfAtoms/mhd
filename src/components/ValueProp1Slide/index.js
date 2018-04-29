import React from 'react';
import styles from './styles.module.scss';

import brainImage from '../../img/brain.png';

export default class ValueProp1Slide extends React.Component {
    render() {
        return (
            <section className={styles.valuePropSection}>
                <figure className={styles.figure}>
                    <img src={brainImage} />
                </figure>
                <section className={styles.mainContent}>
                    <header className={styles.header}>
                        <h1 className={styles.title}> Let's Make It Easy </h1>
                    </header>
                    <section className={styles.blurb}>
                        <p> We’re creating a Mental Health Directory to help people find mental health resources that are:</p>
                        <ul className={styles.resourceList}>
                            <li>Accessible</li>
                            <li>Trustworthy</li>
                            <li>Diverse</li>
                        </ul>
                    </section>
                </section>
            </section>
        );
    }
}
