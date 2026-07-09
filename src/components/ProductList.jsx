import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    // Arreglo con la información de los productos solicitados
    const products = [
        { id: 1, name: 'Gorra Oficial de Mario', price: 19.99, image: 'https://images.unsplash.com/photo-1575426158832-5a5395e297a0?q=80&w=200' },
        { id: 2, name: 'Lámpara Bloque de Pregunta', price: 29.99, image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=200' },
        { id: 3, name: 'Peluche de Yoshi', price: 24.99, image: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=200' }
    ];

    return (
        <section style={containerStyle}>
            <h2 style={sectionTitleStyle}>Catálogo de Productos</h2>
            <div style={gridStyle}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
};

const containerStyle = {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9'
};

const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '30px',
    fontFamily: 'sans-serif'
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto'
};

export default ProductList;