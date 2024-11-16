import React, { useState } from 'react';
import ProfileEditor from '../components/editors/ProfileEditor';
import OwnerInfoEditor from '../components/editors/OwnerInfoEditor';
import AdditionalInfoCardEditor from '../components/editors/AdditionalInfoCardEditor';
import ImagesCardEditor from '../components/editors/ImagesCardEditor';
import AboutMeEditor from '../components/editors/AboutMeEditor';
import AboutMeCard from '../components/cards/AboutMeCard';
import OwnerInfoCard from '../components/cards/OwnerInfoCard';
import AdditionalInfoCard from '../components/cards/AdditionalInfoCard';
import ProfileHeader from '../components/headers/ProfileHeader';
import ContactIcons from '../components/editors/ContactIcons';
import ImagesCard from '../components/cards/ImagesCard';
import profilePic from '../assets/gati_profile.jpeg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Profile.css';

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
    extraInfo: [],
  });
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [photos, setPhotos] = useState([]);

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
    setAdditionalInfo(updatedInfo);
  };

  const handlePhotoUpload = (uploadedPhotos) => {
    setPhotos(uploadedPhotos);
  };

  const toggleIcon = (icon) => {
    setIconsEnabled((prevIconsEnabled) => ({
      ...prevIconsEnabled,
      [icon]: !prevIconsEnabled[icon],
    }));
  };

  // Components order
  const [componentOrder, setComponentOrder] = useState([
    { id: 'ProfileHeader', component: 'ProfileHeader' },
    { id: 'OwnerInfoEditor', component: 'OwnerInfoEditor' },
    { id: 'AboutMeEditor', component: 'AboutMeEditor' },
    { id: 'AdditionalInfoCardEditor', component: 'AdditionalInfoCardEditor' },
    { id: 'ImagesCardEditor', component: 'ImagesCardEditor' },
  ]);

  const moveComponentUp = (index) => {
    if (index === 0) return;
    const newOrder = [...componentOrder];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    setComponentOrder(newOrder);
  };

  const moveComponentDown = (index) => {
    if (index === componentOrder.length - 1) return;
    const newOrder = [...componentOrder];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    setComponentOrder(newOrder);
  };

  return (
    <div className="d-flex">
      {/* Editor Section */}
      <div>
        {componentOrder.map((item, index) => (
          <div key={item.id} className="editor-item">
            {item.component === 'ProfileHeader' && (
              <ProfileEditor
                profile={profile}
                aboutMeData={aboutMeData}
                iconsEnabled={iconsEnabled}
                onProfileChange={handleProfileChange}
                onAboutMeChange={handleAboutMeChange}
                onToggleIcon={toggleIcon}
                setAboutMeTitle={(title) => setAboutMeData({ ...aboutMeData, title })}
                onImageChange={handleImageChange}
                moveUp={() => moveComponentUp(index)}
                moveDown={() => moveComponentDown(index)}
                isFirst={index === 0}
                isLast={index === componentOrder.length - 1}
              />
            )}
            {item.component === 'OwnerInfoEditor' && (
              <OwnerInfoEditor
                ownerInfo={ownerInfo}
                onOwnerInfoChange={handleOwnerInfoChange}
                moveUp={() => moveComponentUp(index)}
                moveDown={() => moveComponentDown(index)}
                isFirst={index === 0}
                isLast={index === componentOrder.length - 1}
              />
            )}
            {item.component === 'AboutMeEditor' && (
              <AboutMeEditor
                aboutMeData={aboutMeData}
                setAboutMeTitle={(title) => setAboutMeData({ ...aboutMeData, title })}
                onAboutMeChange={(subtitle) => setAboutMeData({ ...aboutMeData, subtitle })}
                moveUp={() => moveComponentUp(index)}
                moveDown={() => moveComponentDown(index)}
                isFirst={index === 0}
                isLast={index === componentOrder.length - 1}
              />
            )}
            {item.component === 'AdditionalInfoCardEditor' && (
              <AdditionalInfoCardEditor
                additionalInfo={additionalInfo}
                onAdditionalInfoChange={handleAdditionalInfoChange}
                onToggleVisibility={() => setShowAdditionalInfoCard(!showAdditionalInfoCard)}
                showAdditionalInfoCard={showAdditionalInfoCard}
                moveUp={() => moveComponentUp(index)}
                moveDown={() => moveComponentDown(index)}
                isFirst={index === 0}
                isLast={index === componentOrder.length - 1}
              />
            )}
            {item.component === 'ImagesCardEditor' && (
              <ImagesCardEditor
                photos={photos}
                onPhotoUpload={handlePhotoUpload}
                moveUp={() => moveComponentUp(index)}
                moveDown={() => moveComponentDown(index)}
                isFirst={index === 0}
                isLast={index === componentOrder.length - 1}
              />
            )}
          </div>
        ))}
      </div>

      {/* Preview Section */}
      <div className="profile-container p-3">
        {componentOrder.map((item) => {
          if (item.component === 'ProfileHeader') {
            return <ProfileHeader key={item.id} name={profile.name} breed={profile.breed} subBreed={profile.subBreed} profilePic={profileImage} />;
          }
          // if (item.component === 'ContactIcons') {
          //   return <ContactIcons key={item.id} profile={profile} iconsEnabled={iconsEnabled} />;
          // }
          if (item.component === 'AboutMeEditor') {
            return <AboutMeCard key={item.id} title={aboutMeData.title} subtitle={aboutMeData.subtitle} />;
          }
          if (item.component === 'OwnerInfoEditor') {
            return (
              <OwnerInfoCard
                key={item.id}
                title={ownerInfo.title}
                icon={ownerInfo.icon}
                phone={ownerInfo.phone}
                email={ownerInfo.email}
                address={ownerInfo.address}
                extraInfo={ownerInfo.extraInfo}
              />
            );
          }
          if (item.component === 'AdditionalInfoCardEditor' && showAdditionalInfoCard) {
            return <AdditionalInfoCard key={item.id} title="Additional Information" additionalInfo={additionalInfo} />;
          }
          if (item.component === 'ImagesCardEditor') {
            return <ImagesCard key={item.id} photos={photos} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Profile;
