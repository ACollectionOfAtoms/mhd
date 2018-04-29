import React from 'react';
import styles from './styles.module.scss';

import clipboard from '../../img/clipboard.svg';

export default class ValueProp1Slide extends React.Component {
    render() {
        return (
            <section className={styles.valuePropSection}>
                <section className={styles.mainContent}>
                    <header className={styles.header}>
                        <img className={styles.icon} src={clipboard} />
                        <h1 className={styles.title}> Take Our Survey</h1>
                    </header>
                    <section className={styles.blurb}>
                        <p>
                        The Mental Health Directory is currently under construction. Help us make it as useful as possible by taking our 1-minute user survey.
                        </p>
                    </section>
                    <a href='https://surveynuts.com/surveys/take?id=161081&c=4300218393VPJR' target='_blank'>
                        <div className={styles.button}>
                            <p>
                                Complete the User Survey
                            </p>
                        </div>
                    </a>
                </section>
            </section>
        );
    }
}
