import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 BrandName. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
};

export default Footer;
