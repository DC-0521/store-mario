import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 Store Mario. Todos los derechos reservados.</p>
      <div style={styles.team}>
        <span><strong>Líder:</strong> Daniel</span> | 
        <span><strong>Productos:</strong> Michael</span> | 
        <span><strong>Info:</strong> Joseph Castro</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 10px',
    fontFamily: 'sans-serif',
    marginTop: 'auto'
  },
  text: { margin: '0 0 10px 0', fontSize: '14px' },
  team: { fontSize: '13px', color: '#aaa', display: 'flex', justifyContent: 'center', gap: '15px' }
};