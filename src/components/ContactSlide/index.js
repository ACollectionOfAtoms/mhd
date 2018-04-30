import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export default class ValueProp1Slide extends React.Component {
    // See mixins.scss for MediaQuery widths!
    render() {
        return (
            <section className={styles.contactSection}>
                <header className={cx(styles.header, styles.mobileHeader)}>
                    <h1 className={styles.title}> Let’s Shine Some Light on Mental Health Resources </h1>
                </header>
                <section className={styles.faceSection}>
                    <div className={styles.leftSide}>
                        <div>
                            <div className={cx(styles.megan, styles.face)}></div>
                        </div>
                        <div>
                            <div className={cx(styles.adam, styles.face)}></div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div>
                            <div className={cx(styles.vickie, styles.face)}></div>
                        </div>
                        <div>
                            <div className={cx(styles.michael, styles.face)}></div>
                        </div>
                    </div>
                </section>
                <section className={styles.mainContent}>
                    <h1 className={cx(styles.title, styles.desktopHeader)}> Let’s Shine Some Light on Mental Health Resources </h1>
                    <p> The Mental Health Directory is in its initial stages and the team is open to any feedback and help that people may want to contribute. </p>
                    <p> We appreciate anything that may make the site helpful to more people. This could be anything from sharing a similar site that has worked for you, something that you hope to see in the directory, or web design and development help. </p>
                    <p> If you would like to offer your knowledge, or provide advice/feedback, please email us at:</p> 
                    <p className={styles.contactLink}> <a href='mailto:questions@mentalhealthdirectory.net'> questions@mentalhealthdirectory.net</a></p>
                </section>
            </section>
        );
    }
}
