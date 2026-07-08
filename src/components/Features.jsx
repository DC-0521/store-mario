import React from 'react';

export default function Features() {
  const benefits = [
    { id: 1, icon: "🚚", title: "Envíos Rápidos", desc: "¡Más rápidos que una súper estrella!" },
    { id: 2, icon: "🍄", title: "Productos Oficiales", desc: "100% licenciados por Nintendo." },
    { id: 3, icon: "🛡️", title: "Pago Seguro", desc: "Protegido como el castillo de Peach." }
  ];

  return (
    <section style={styles.container}>
      {benefits.map(b => (
        <div key={b.id} style={styles.card}>
          <span style={styles.icon}>{b.icon}</span>
          <h3 style={styles.title}>{b.title}</h3>
          <p style={styles.desc}>{b.desc}</p>
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '40px 20px',
    background: '#f9f9f9',
    gap: '20px'
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '250px',
    borderTop: '5px solid #E52521' // Rojo Mario
  },
  icon: { fontSize: '40px' },
  title: { margin: '10px 0', fontFamily: 'sans-serif', color: '#333' },
  desc: { color: '#666', fontSize: '14px' }
};