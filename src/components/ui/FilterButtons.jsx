//Componente: PlatformFilter
//Descripción: Este componente contiene los botones de filtro por plataforma (PlayStation, Xbox, Switch). Permite al usuario filtrar los productos mostrados según la plataforma seleccionada.
import React from 'react';
import Button from './Button';
const FilterButtons = ({ activeFilter, onFilterChange, filters }) => {
  const defaultFilters = [
    { key: 'bestsellers', label: 'MÁS VENDIDOS' },
    { key: 'playstation', label: 'PLAYSTATION' },
    { key: 'xbox', label: 'XBOX' },
    { key: 'switch', label: 'SWITCH' }
  ];
  const filterList = filters || defaultFilters;
  return (
    <div className="filter-buttons">
      {filterList.map(filter => (
        <Button 
          key={filter.key}
          variant={activeFilter === filter.key ? 'active' : 'secondary'}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};
export default FilterButtons;