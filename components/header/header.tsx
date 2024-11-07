import React from 'react';
import Login from '../loginNextAuth/page';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Exam-AI</h1>
      <Login />
    </header>
  );
};

export default Header;
