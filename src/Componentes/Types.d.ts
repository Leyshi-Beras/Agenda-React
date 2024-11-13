import React from 'react';

interface AgendaProps {
  title: string;
  events: Array<{ title: string; date: Date }>;
}

declare module 'Agenda.jsx' {
  const Agenda: React.FC<AgendaProps>;
  export default Agenda;
}
