import React, {useState}from 'react';
import './Formulario.css';

const Formulario = ({OnFormulario}) => {
    const [nombre, setNombre] = useState ('');
    const [email, setEmail] = useState ('');
    const [telefono, setTelefono] = useState('');

    const handleFormulario =() => {
        if (nombre && email && telefono) {
            const nuevoContacto ={
                id: 
                Math.random().toString(36).substr(2,9),
                nombre,
                email,
                telefono,
            };
            OnFormulario(nuevoContacto);
            setNombre('');
            setEmail('');
            setTelefono('');
        } else {
            alert('Por favor completa todos los datos');
        }
    };
    return(
        <>
        <div className='div-nube'>
            <h2 className='hdos-agregar'>Agregar Contacto:</h2>
            <input type="text" className='input-1' placeholder='Nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        <input type="email" className='input-2' placeholder='Correo Electrónico' value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <input type="text" className='input-3' placeholder='Teléfono'value={telefono} onChange={(e) =>setTelefono(e.target.value)}/>
        <button onClick={handleFormulario} className='btn-agregar'>Nuevo Contacto:</button>
        </div>
        
        </>
);
};
export { Formulario }