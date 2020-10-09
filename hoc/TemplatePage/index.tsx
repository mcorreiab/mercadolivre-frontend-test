import React, { Fragment } from 'react';
import SearchBar from '../../containers/SearchBar';
import styles from './TemplatePage.module.scss';


const templatePage = (props: { children?: React.ReactNode; }) =>
    (
        <Fragment>
            <header className={styles.Header}>
                <div className={styles.PageContent}>
                    <SearchBar />
                </div>
            </header>
            <main className={styles.Main}>
                <div className={styles.PageContent}>
                    {props.children}
                </div>
            </main>
        </Fragment>
    )

export default templatePage;