import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <span style={styles.logoM}>M</span>
        <h1 style={styles.title}>Mario & Co. Store</h1>
      </div>
      <nav style={styles.nav}>
        {/* Enlaces estáticos como solicita la actividad */}
        <a href="#inicio" style={styles.link}>Inicio</a>
        <a href="#gorras" style={styles.link}>Gorras</a>
        <a href="#figuras" style={styles.link}>Figuras</a>
        <a href="#ropa" style={styles.link}>Ropa</a>
        <a href="#contacto" style={styles.link}>Contacto</a>
      </nav>
      <div style={styles.cartIcon}>🛒</div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#white',
    borderBottom: '4px solid var(--mario-red)',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoM: {
    backgroundColor: 'var(--mario-red)',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '50%',
    fontWeight: 'bold',
    fontSize: '20px',
    border: '2px solid var(--mario-yellow)',
  },
  title: {
    margin: 0,
    fontSize: '22px',
    color: 'var(--text-dark)',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text-dark)',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.2s',
  },
  cartIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  }
};

export default Header;