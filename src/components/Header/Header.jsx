import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ title = 'MovieVerse' }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>{title}</div>
            <nav className={styles.nav}>
                <button className={styles.navButton}>Movies</button>
                <button className={styles.navButton}>Sport</button>
                <button className={styles.navButton}>Cartoons</button>
                <button className={styles.navButton}>Live</button>
                <button className={styles.navButton}>Game</button>
            </nav>
            <div className={styles.actions}>
                <input
                    type="text"
                    className={styles.searchInput}
                />
                <button className={styles.authButton}>Register</button>
                <button className={styles.authButton}>SignIn</button>
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;

