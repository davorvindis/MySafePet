import React, { useState } from 'react';
import ProfileEditor from './editors/ProfileEditor';
import OwnerInfoEditor from './editors/OwnerInfoEditor';
import AdditionalInfoCardEditor from './editors/AdditionalInfoCardEditor';
import AboutMeCard from './AboutMeCard';
import OwnerInfoCard from './OwnerInfoCard';
import AdditionalInfoCard from './AdditionalInfoCard';
import ProfileHeader from './ProfileHeader';
import ContactIcons from './editors/ContactIcons';
import profilePic from '../assets/gati_profile.jpeg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Gati',
    breed: 'Gato',
    subBreed: 'Negro',
    ownerPhone: '+1 9876543210',
    ownerEmail: 'abc@xyz.com',
    ownerAddress: 'Street, Building, City, State, Country',
  });

  const [showAdditionalInfoCard, setShowAdditionalInfoCard] = useState(true);


  const [aboutMeData, setAboutMeData] = useState({
    title: 'About Me',
    subtitle: 'I am so cute...',
  });

  const [iconsEnabled, setIconsEnabled] = useState({
    phone: true,
    email: true,
    address: true,
  });

  const [profileImage, setProfileImage] = useState(profilePic);

  const [ownerInfo, setOwnerInfo] = useState({
    title: 'Owner Info',
    icon: faPhone,
    phone: profile.ownerPhone,
    email: profile.ownerEmail,
    address: profile.ownerAddress,
    extraInfo: []
  });

  const [additionalInfo, setAdditionalInfo] = useState([]); // Initialize additionalInfo as an empty array

  const handleProfileChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const handleAboutMeChange = (value) => {
    setAboutMeData((prevData) => ({ ...prevData, subtitle: value }));
  };

  const handleImageChange = (imageURL) => {
    setProfileImage(imageURL);
  };

  const handleOwnerInfoChange = (field, value) => {
    setOwnerInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleAdditionalInfoChange = (updatedInfo) => {
    setAdditionalInfo(updatedInfo); // Update additionalInfo state with the edited fields
  };

  const toggleIcon = (icon) => {
    setIconsEnabled((prevIconsEnabled) => ({
      ...prevIconsEnabled,
      [icon]: !prevIconsEnabled[icon],
    }));
  };

  return (
    <div className="d-flex">
      <div>
        <ProfileEditor
          profile={profile}
          aboutMeData={aboutMeData}
          iconsEnabled={iconsEnabled}
          onProfileChange={handleProfileChange}
          onAboutMeChange={handleAboutMeChange}
          onToggleIcon={toggleIcon}
          setAboutMeTitle={(title) => setAboutMeData({ ...aboutMeData, title })}
          onImageChange={handleImageChange}
        />

        <OwnerInfoEditor
          ownerInfo={ownerInfo}
          onOwnerInfoChange={handleOwnerInfoChange}
        />

        <AdditionalInfoCardEditor
          additionalInfo={additionalInfo}
          onAdditionalInfoChange={handleAdditionalInfoChange}
          onToggleVisibility={() => setShowAdditionalInfoCard(!showAdditionalInfoCard)}
          showAdditionalInfoCard={showAdditionalInfoCard} // Pass the current state for the switch
        />
      </div>

      <div className="profile-container p-3">
        <ProfileHeader
          name={profile.name}
          breed={profile.breed}
          subBreed={profile.subBreed}
          profilePic={profileImage}
        />
        <ContactIcons profile={profile} iconsEnabled={iconsEnabled} />
        <AboutMeCard title={aboutMeData.title} subtitle={aboutMeData.subtitle} />

        <OwnerInfoCard
          title={ownerInfo.title}
          icon={ownerInfo.icon}
          phone={ownerInfo.phone}
          email={ownerInfo.email}
          address={ownerInfo.address}
          extraInfo={ownerInfo.extraInfo}
        />


        {showAdditionalInfoCard && (
          <AdditionalInfoCard
            title="Additional Information"
            additionalInfo={additionalInfo}
          />
        )}


      </div>
    </div>
  );
};

export default Profile;
