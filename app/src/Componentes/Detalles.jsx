import React from 'react';
import { OtrosDatos } from './OtrosDatos';
import './Detalles.css';



const Detalles = ({contactoId}) => {
    const contacto = OtrosDatos.find((c) =>
    c.id === contactoId);
    return(
        <>
        <div className='detalles'>
            <h2 className='otros-datos'>Otros Datos:</h2>
            {contacto && (
                <div>
                    <p className='telefono'>Teléfono: {contacto.Telefono}</p>
                    <p className='direccion'>Dirección: {contacto.Direccion}</p>
                </div>
            )}
        </div>
        </>
);
};
export { Detalles }