import React, { useState } from 'react';
import ListaContactos from './ListaContactos';
import AgregarContactos from './AgregarContactos';

function Agenda() {
  const [refresh, setRefresh] = useState(false);
  const handleAgregarContacto = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <AgregarContactos onAdd={handleAgregarContacto} />
      <ListaContactos key={refresh} /> {}
    </div>
  );
}

export default Agenda;
