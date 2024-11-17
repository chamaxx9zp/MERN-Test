import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate('/users'); // Navigate to the /users page when the button is clicked
  };
  return (
    <section style={styles.hero}>
      <h2 style={styles.title}>Welcome to Our Landing Page</h2>
      <p style={styles.subtitle}>
        Discover the best solution for your needs with modern, responsive design.
      </p>
      <button style={styles.button} onClick={handleClick}>Users</button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: 'center',
    padding: '100px 20px',
    backgroundColor: '#61dafb',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#282c34',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Hero;
