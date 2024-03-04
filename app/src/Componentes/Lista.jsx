import React, {useState} from 'react';
import { Detalles } from './Detalles';
import { Formulario } from './Formulario';
import { Filtro } from './Filtro';
import './Lista.css';
//lista de  contactos:
const Lista = () => {
    const [contactos, setContactos] = useState([
        {id: 1, nombre: 'Mariana', email: 'mariana@gmail.com'},
        {id: 2, nombre: 'Damian', email: 'damian@gmail.com'},
        {id: 3, nombre: 'Richard', email: 'richard@gmail.com'},
        {id: 4, nombre: 'Mateo', email: 'mateo@gmail.com'},
        {id: 5, nombre: 'Denisse', email: 'denisse@gmail.com'},
        {id: 6, nombre: 'Fatima', email: 'fatima@gmail.com'},
        {id: 7, nombre: 'Martin', email: 'martin@gmail.com'},
        {id: 8, nombre: 'Celeste', email: 'celeste@gmail.com'},
        {id: 9, nombre: 'Marcelo', email: 'marcelo@gmail.com'}, 
        {id: 10, nombre: 'Florencia', email: 'flor@gmail.com'},
    

    ]);
    const [filteredContactos, setFilteredContactos] = useState([...contactos]);

const [seleccionarContactos, setSeleccionarContactos] =useState(null)

    const handleSeleccionarContacto= (contactoId) =>
    {
        setSeleccionarContactos(contactoId);
        
    };
    

const handleFormulario = (nuevoContacto) => {
    setContactos([...contactos, nuevoContacto]);
    setFilteredContactos([...contactos, nuevoContacto]);
};
const handleFilter =(filterValue) =>{
    const filtered = contactos.filter((contacto) =>
    contacto.nombre.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredContactos(filtered);
};
const handleEliminarContacto = (id) => {
    const updatedContactos= contactos.filter((contacto) => contacto.id !== id);
    setContactos(updatedContactos);
    setFilteredContactos(updatedContactos);
};
    return(
        <>
        <div>
        <Filtro paraFiltrar={handleFilter}/>
            <div className='div-lista'>
                <ul>
                {filteredContactos.map((contacto) => (
                    <li key= {contacto.id} onClick={()=> handleSeleccionarContacto(contacto.id)}>
                        {contacto.nombre} - {contacto.email} -{contacto.telefono}
                        <button onClick={() => handleEliminarContacto(contacto.id)} className='btn-eliminar'><i class="bi bi-person-dash"></i></button>
                    </li>
                ))}
            </ul>
            </div>
            {seleccionarContactos && <Detalles contactoId={seleccionarContactos}/>}
            <Formulario OnFormulario={handleFormulario}/>
        </div>
        </>
);
};
export { Lista }