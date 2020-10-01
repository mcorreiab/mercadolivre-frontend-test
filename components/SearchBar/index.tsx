import React from 'react';
import styles from './searchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchBar = () =>
    <div className={styles.SearchBar}>
        <form className={styles.SearchBar__bar}>
            <figure className={styles.SearchBar__bar__logo}>
                <img src="/mercadolivre-logo.png" alt="Mercado Livre logo"/>
            </figure>
            <input className={styles.SearchBar__bar__text} type="text" placeholder="Digite aqui o que deseja buscar" />
            <button className={styles.SearchBar__bar__button}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    </div>

export default searchBar;