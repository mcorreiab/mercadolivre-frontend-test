import React, { ReactNode } from 'react';
import SearchBar from '../../containers/SearchBar';
import styles from './TemplatePage.module.scss';

const headerClasses = Array.of(styles.Header, styles.PageContent).join(' ');
const mainClasses = Array.of(styles.Main, styles.PageContent).join(' ');

const templatePage = (props: { children?: ReactNode; }) =>
    (
        <div className={styles.TemplatePage}>
            <header className={headerClasses}>
                <SearchBar />
            </header>
            <main className={mainClasses}>
                {props.children}
            </main>
        </div>
    )

export default templatePage;