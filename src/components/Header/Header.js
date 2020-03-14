import React from 'react';
import Button from '../Button/Button'
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/must-read-logo.png';

const Header = () => (
    <header className={styles.wrapper}>
        <img src={logoImage} alt="Must Read Logo" />
        <HeaderNavigation />
        <Button secondary>New item</Button>
    </header>
);

export default Header;