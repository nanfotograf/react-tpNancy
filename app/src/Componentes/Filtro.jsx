import React, {useState} from 'react';
import './Filtro.css';

const Filtro = ({paraFiltrar}) => {
    const[filterValue, setFilterValue] =useState('');
    const handleFilterChange = (e) =>{
        const value = e.target.value;
        setFilterValue(value);
        paraFiltrar(value);
    };
    return(
        <>
        <div className='style-input'>
            <h2 className='filtrar-hdos'>Filtrar Contactos:</h2>
            <input type="text" className='input-4'  placeholder='Buscar por nombre' value={filterValue} onChange={handleFilterChange}/>
        </div>
        </>
);
};
export { Filtro }