import React from 'react';
import './Profile.css'; // Estilos del perfil
import Card from './Card'; // Componente Card
import AboutMeCard from './AboutMeCard'; // Componente Card
import OwnerInfo from './OwnerInfo'; // Componente Card
import profilePic from '../assets/gati_profile.jpeg'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header del perfil */}
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={profilePic}
            alt="Chimuelo"
          />
        </div>
        <h1 className="profile-name">Gati</h1>
        <p className="profile-info">Gato <strong>Negro</strong></p>
      
        
        <AboutMeCard 
            title="About me" 
            subtitle="I am so cute .." 
        />
        <OwnerInfo
            title="Owner Info"
            phone="+1 9876543210"
            email="abc@xyz.com"
            address="Street, Building, City, State, Country"
        />

        
    
        
    
      {/* Cards */}
      {/* <Card icon="fa fa-phone" title="Información de mi dueño">
        <p><strong>Su teléfono:</strong> +54 9 11 2158-9786</p>
        <p><strong>Nuestra casa:</strong> El Lago 40, Club de Campo Abril, B1885 Guillermo Enrique Hudson, Provincia de Buenos Aires, Argentina</p>
        <button className="add-contact-button">Agregar a contactos</button>
      </Card>

      <Card icon="fa fa-info-circle" title="Mi información">
        <p><strong>Me vacuné:</strong> Sí</p>
        <p><strong>Vacuna 1:</strong> Para la fecha 😎</p>
        <p><strong>Vacuna 2:</strong> Rabia</p>
        <p><strong>Vacuna 3:</strong> Parásitos</p>
        <p><strong>Edad:</strong> 2 años</p>
        <p><strong>Género:</strong> Hombrecito</p>
      </Card> */}
    </div>
    </div>
  );
};

export default Profile;
