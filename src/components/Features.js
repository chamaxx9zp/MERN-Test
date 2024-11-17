import React from 'react';

function Features() {
  const featureList = [
    { title: 'Fast Performance', description: 'Experience blazing-fast speeds with optimized performance.' },
    { title: 'Responsive Design', description: 'Looks great on any device, big or small.' },
    { title: 'Easy Customization', description: 'Tailor your experience with ease and flexibility.' },
  ];

  return (
    <section id="features" style={styles.section}>
      <h2 style={styles.sectionTitle}>Features</h2>
      <div style={styles.featureContainer}>
        {featureList.map((feature, index) => (
          <div key={index} style={styles.feature}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  featureContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  feature: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    flex: '1 1 300px',
    maxWidth: '300px',
  },
};

export default Features;
