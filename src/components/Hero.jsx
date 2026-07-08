import React from 'react';

function Hero() {
  return (
    <section style={styles.hero}>
      <h2 style={styles.title}>¡Lleva la magia del Reino Champiñón a tu hogar!</h2>
      <p style={styles.subtitle}>
        Explora la colección exclusiva de mercancía oficial de Super Mario. Figuras coleccionables, gorras, 
        ropa y accesorios pensados para verdaderos fanáticos de Nintendo.
      </p>
      <button style={styles.button}>Ver Catálogo Inicial</button>
    </section>
  );
}

const styles = {
  hero: {
    backgroundColor: '#ffffff', // Fondo blanco emulando a Nintendo
    color: '#323232', // Texto oscuro para que sea perfectamente legible
    textAlign: 'center',
    padding: '80px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '40px',
    margin: '0 0 20px 0',
    color: '#1a1a1a', // Un tono más fuerte para el encabezado principal
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '18px',
    maxWidth: '800px',
    margin: '0 0 40px 0',
    lineHeight: '1.6',
    color: '#4a4a4a', // Gris equilibrado para el párrafo
  },
  button: {
    backgroundColor: '#e60012', // Botón rojo llamativo clásico de los botones de Nintendo
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s',
  }
};

export default Hero;