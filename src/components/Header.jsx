import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="/logo-mario.png" 
          alt="Mario & Co. Logo" 
          style={styles.logoImg} 
        />
        <h1 style={styles.title}>Mario & Co. Store</h1>
      </div>
      <nav style={styles.nav}>
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
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#e60012', // Rojo Nintendo oficial
    borderBottom: '4px solid #b3000e', // Un tono más oscuro abajo para dar relieve
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoImg: {
    width: '45px',
    height: '45px',
    objectFit: 'contain',
    borderRadius: '4px',
    border: '2px solid white', // Borde blanco sutil para resaltar el logo sobre el rojo
  },
  title: {
    margin: 0,
    fontSize: '22px',
    color: 'white', // Texto en blanco
    fontFamily: 'sans-serif',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white', // Enlaces en blanco
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'opacity 0.2s',
  },
  cartIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    filter: 'brightness(0) invert(1)', // Truco CSS para que el emoji de carrito adopte tonos más claros o resalte en fondo oscuro si es necesario, o lo dejamos estándar
  }
};

export default Header;