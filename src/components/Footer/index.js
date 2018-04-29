import React from 'react';
import styles from './styles.module.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <section className={styles.content}>
                    <section className={styles.blurb}>
                        <h1>Spread the Word</h1>
                    </section>
                    <section className={styles.socialMedia}>
                    </section>
                </section>
            </footer>
        );
    }
}
