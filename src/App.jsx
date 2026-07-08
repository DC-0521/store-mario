import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Nota: Tus compañeros importarán sus componentes aquí (ProductList, Features, Footer)

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        
        {/* Aquí Michael colocará su componente: */}
        {/* <ProductList /> */}
        
        {/* Aquí tu otro compañero colocará su componente: */}
        {/* <Features /> */}
      </main>
      
      {/* Aquí tu otro compañero colocará su componente: */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;