import React, { useEffect, useState } from 'react';

function ListaContactos() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error al obtener los contactos:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaContactos;
