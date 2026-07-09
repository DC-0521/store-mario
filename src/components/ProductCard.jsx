import React from 'react';

// Componente reutilizable para cada producto de la tienda de Mario
const ProductCard = ({ name, price, image }) => {
    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imageStyle} />
            <h3 style={titleStyle}>{name}</h3>
            <p style={priceStyle}>${price}</p>
            <button style={buttonStyle}>Comprar</button>
        </div>
    );
};

// Estilos rápidos en línea (puedes cambiarlos luego para que combinen con el diseño de Daniel)
const cardStyle = {
    border: '2px solid #E60012', // Rojo Nintendo
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#333'
};

const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'contain'
};

const titleStyle = {
    fontSize: '1.2rem',
    margin: '10px 0',
    fontFamily: 'sans-serif'
};

const priceStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#E60012'
};

const buttonStyle = {
    backgroundColor: '#E60012',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
};

export default ProductCard;