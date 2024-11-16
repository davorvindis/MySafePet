import React from 'react';

const ContactIcons = ({ profile, iconsEnabledmoveUp, moveDown, isFirst, isLast }) => (
  <div className="d-flex justify-content-center mb-3">
    {iconsEnabled.email && (
      <button
        className="btn btn-circle me-2"
        onClick={() => window.location.href = `mailto:${profile.ownerEmail}`}
        title="Enviar Email"
      >
        <i className="fas fa-envelope"></i>
      </button>
    )}
    {iconsEnabled.phone && (
      <button
        className="btn btn-circle me-2"
        onClick={() => window.location.href = `tel:${profile.ownerPhone}`}
        title="Llamar"
      >
        <i className="fas fa-phone"></i>
      </button>
    )}
    {iconsEnabled.address && (
      <button
        className="btn btn-circle"
        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.ownerAddress)}`, '_blank')}
        title="Ver Dirección"
      >
        <i className="fas fa-map-marker-alt"></i>
      </button>
    )}
  </div>
);

export default ContactIcons;
