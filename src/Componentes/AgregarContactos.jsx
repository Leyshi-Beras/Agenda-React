import React, { useState } from 'react';

function AgregarContactos({ onAdd }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const NuevoContacto = { nombre, apellido, telefono };
    
    try {
      const respuesta = await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NuevoContacto),
      });

      if (respuesta.ok) {
        onAdd();
        setNombre('');
        setApellido('');
        setTelefono('');
      } else {
        console.error('Error al agregar el contacto');
      }
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button type="submit">Agregar Contacto</button>
      </form>
    </div>
  );
}

export default AgregarContactos;