import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';
// we need Link to prevent reloading the pages

const HeaderNavigation = () => (
    <nav>
        {/* we need "exact" to make only one of the active links styled in the same time */}
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/">Twitters</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/articles">Articles</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/notes">Notes</NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;