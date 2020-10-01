import React, { Component, ComponentType, Fragment, SFC } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './withTemplatePage.module.scss';

const withTemplatePage = <P extends object>(WrappedComponent: ComponentType<P>) => {
    return class withTemplatePage extends Component<P> {
        render() {
            return (
                <Fragment>
                    <header className={styles.Header}>
                        <div className={styles.PageContent}>
                            <SearchBar />
                        </div>
                    </header>
                    <main className={styles.Main}>
                        <div className={styles.PageContent}>
                            <WrappedComponent {...this.props as P} />
                        </div>
                    </main>
                </Fragment>
            );
        }
    };
};

export default withTemplatePage;