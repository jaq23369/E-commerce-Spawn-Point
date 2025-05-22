import React from 'react';
import './App.css';

// Importa el componente SearchBar
import SearchBar from './components/layout/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spawn Point</h1>
        <p>Prueba de componentes</p>
      </header>
      <main>
        <h2>Componente SearchBar:</h2>
        <div style={{ padding: '20px', background: '#f5f5f5', maxWidth: '600px', margin: '0 auto' }}>
          <SearchBar />
        </div>
      </main>
    </div>
  );
}

export default App;
