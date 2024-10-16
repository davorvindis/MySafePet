import React from 'react';
import './Card.css'; // Estilos para las cards

const Card = ({ icon, title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <i className={icon}></i> {/* Aquí va el ícono que recibimos como prop */}
        <h2>{title}</h2>
      </div>
      <div className="card-content">
        {children} {/* El contenido variable se renderiza aquí */}
      </div>
    </div>
  );
};

export default Card;
