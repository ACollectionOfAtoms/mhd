import React from 'react';
import styles from './styles.module.scss';

import brainImage from '../../img/brain.png';

export default class ValueProp1Slide extends React.Component {
    render() {
        return (
            <section className={styles.valuePropSection}>
                <header className={styles.header}>
                    <h1 className={styles.title}> Let’s Shine Some Light on Mental Health Resources </h1>
                </header>
                <figure className={styles.figure}>
                    <img src={brainImage} />
                </figure>
                <section className={styles.mainContent}>
                    <p> The Mental Health Directory is in its initial stages and the team is open to any feedback and help that people may want to contribute. </p>
                    <p> We appreciate anything that may make the site helpful to more people. This could be anything from sharing a similar site that has worked for you, something that you hope to see in the directory, or web design and development help. </p>
                    <p> If you would like to offer your knowledge, or provide advice/feedback, please email us at:</p> 
                    <p className={styles.contactLink}> <a href='mailto:questions@mentalhealthdirectory.net'> questions@mentalhealthdirectory.net</a></p>
                </section>
            </section>
        );
    }
}
