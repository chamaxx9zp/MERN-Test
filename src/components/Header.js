import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>BrandName</h1>
      <nav style={styles.nav}>
        <a href="#features" style={styles.navLink}>Features</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Header;
