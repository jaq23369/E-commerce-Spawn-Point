//Componente: SearchBar
//Descripción: Este componente proporciona una barra de búsqueda para que los usuarios puedan encontrar productos por nombre o características.
import React, { useState } from 'react';
import Button from '../ui/Button';
const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder || "Buscar juegos..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </form>
    </div>
  );
};
export default SearchBar;