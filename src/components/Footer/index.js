import React from 'react';
import styles from './styles.module.scss';

import twitter from '../../img/twitter.svg';
import facebook from '../../img/facebook.svg';
import email from '../../img/email.svg';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>

                <section className={styles.content}>
                    <section className={styles.blurb}>
                        <h1>Spread the Word</h1>
                    </section>
                    <section className={styles.socialMedia}>
                        <a className={styles.socialMediaLink}href='https://twitter.com/the_MHD_' target='_blank'>
                            <img src={twitter}/>
                        </a>

                        <a className={styles.socialMediaLink}href='https://www.facebook.com/sharer/sharer.php?u=mentalhealthdirectory.net' target='_blank'>
                            <img src={facebook}/>
                        </a>

                        <a className={styles.socialMediaLink}href='mailto:questions@mentalhealthdirectory.net' target='_blank'>
                            <img src={email}/>
                        </a>
                    </section>
                </section>
            </footer>
        );
    }
}
