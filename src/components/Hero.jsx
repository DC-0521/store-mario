import React from 'react';

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h2 style={styles.headline}>¡Lleva la magia del Reino Champiñón a tu hogar!</h2>
          <p style={styles.subheadline}>
            Explora la colección exclusiva de mercancía oficial de Super Mario. Figuras coleccionables, gorras, ropa y accesorios pensados para verdaderos fanáticos de Nintendo.
          </p>
          <button className="btn-mario" style={styles.button}>
            Ver Catálogo Inicial
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    // Puedes usar un color de fondo temático degradado o añadir una imagen limpia después
    background: 'linear-gradient(135deg, var(--mario-red) 0%, #a81310 100%)',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headline: {
    fontSize: '42px',
    margin: '0 0 20px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
  },
  subheadline: {
    fontSize: '18px',
    lineHeight: '1.6',
    margin: '0 0 30px 0',
    opacity: '0.9',
  },
  button: {
    fontSize: '18px',
    padding: '12px 30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
  }
};

export default Hero;