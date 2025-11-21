import React from 'react';
import data from '../data.json';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <h1 style={styles.logo}>{data.profile.name}</h1>
        <nav>
          <ul style={styles.navList}>
            <li><a href="#work" style={styles.link}>Work</a></li>
            <li><a href="#contact" style={styles.link}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '2rem 0',
    marginBottom: '4rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: '600',
    letterSpacing: '-0.02em',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '0.9rem',
    color: 'var(--secondary-text)',
    transition: 'color 0.2s ease',
  }
};

export default Header;
