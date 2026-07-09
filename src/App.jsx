import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />

        {/* 2. Colocamos tu componente en el bloque asignado a Michael */}
        <ProductList />

        {/* Aquí tu otro compañero colocará su componente: */}
        {/* <Features /> */}
      </main>

      {/* Aquí tu otro compañero colocará su componente: */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;