import React, { useState, useEffect } from 'react';
import ProfileEditor from '../components/editors/ProfileEditor';
import OwnerInfoEditor from '../components/editors/OwnerInfoEditor';
import AdditionalInfoCardEditor from '../components/editors/AdditionalInfoCardEditor';

import AboutMeEditor from '../components/editors/AboutMeEditor';
import AboutMeCard from '../components/cards/AboutMeCard';
import OwnerInfoCard from '../components/cards/OwnerInfoCard';
import AdditionalInfoCard from '../components/cards/AdditionalInfoCard';
import ProfilePetInfoCard from '../components/cards/ProfilePetInfoCard';
import ContactIcons from '../components/editors/ContactIcons';

import profilePic from '../assets/gati_profile.jpeg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Profile.css';


import ImagesCardEditor from '../components/editors/ImagesCardEditor';
import ImagesCard from '../components/cards/ImagesCard';
import { Container, Col, Row } from 'react-bootstrap';

import ContactIconsEditor from '../components/cards/ContactIconsEditor';
import BackgroundImageEditor from '../components/editors/BackgroundImageEditor';

import { saveProfile, updateProfile, getProfileById } from '../services/profileApi';

import axios from 'axios';


// import './Profile.css'


const Profile = () => {

  const profileId = 48
  const [profileImage, setProfileImage] = useState(profilePic);
  const userId = 10; //Tomar esto del path o de algun lado real


  const [photos, setPhotos] = useState([
    { id: 1, src: 'https://www.google.com/imgres?q=images%20cat&imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F548467d8-c5f1-4551-9f58-6817a8d2c45e%2FNationalGeographic_2572187_2x1.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&docid=K6Qd9XWnQFQCoM&tbnid=PfujBs9FDkBe-M&vet=12ahUKEwjBjLLz_eCJAxWrqZUCHZArL0EQM3oECGYQAA..i&w=3072&h=1536&hcb=2&ved=2ahUKEwjBjLLz_eCJAxWrqZUCHZArL0EQM3oECGYQAA' },
    { id: 2, src: 'https://via.placeholder.com/150' },
    { id: 3, src: 'https://via.placeholder.com/150' },
  ]);

  const [viewType, setViewType] = useState('grid1'); // Control view type
  const [showTitleDesc, setShowTitleDesc] = useState(false); // Title and description toggle

  // Add or delete photos from the editor
  const handleAddPhoto = (photo) => {
    setPhotos((prevPhotos) => [...prevPhotos, photo]);
  };

  const handleDeletePhoto = (photoId) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== photoId));
  };

  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null); // For the file object


  const [profile, setProfile] = useState({
    profilePic: profileImage,
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
    email: true,
    phone: true,
    address: true,
  });

  const toggleIcon = (icon) => {
    setIconsEnabled((prev) => ({
      ...prev,
      [icon]: !prev[icon],
    }));
  };

  const [ownerInfo, setOwnerInfo] = useState({
    title: 'Owner Info',
    icon: faPhone,
    phone: profile.ownerPhone,
    email: profile.ownerEmail,
    address: profile.ownerAddress,
    extraInfo: [],
  });

  const [additionalInfo, setAdditionalInfo] = useState([]);

  const handleProfileChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const handleAboutMeChange = (value) => {
    setAboutMeData((prevData) => ({ ...prevData, subtitle: value }));
  };

  const handleImageChange = (previewUrl, file) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePic: previewUrl, // Update the preview
      profilePicFile: file,   // Store the file for uploading
    }));
  };

  const handleOwnerInfoChange = (field, value) => {
    setOwnerInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };


  const handlePhotoUpload = (uploadedPhotos) => {
    setPhotos(uploadedPhotos);
  };


  //Fetch profile data onLoad
  useEffect(() => {

    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/profile/${profileId}`);
        const data = response.data;

        // Populate the state with the fetched data
        setProfile({
          name: data.name,
          breed: data.breed,
          subBreed: data.subBreed,
          profilePic: data.profilePic,
          viewType: data.viewType,
          backgroundImage: data.backgroundImage,
        });

        setOwnerInfo({
          title: data.ownerInfo.title,
          phone: data.ownerInfo.phone,
          email: data.ownerInfo.email,
          address: data.ownerInfo.address,
          icon: data.ownerInfo.icon,
          extraInfo: response.data.extraInfo || []
        });

        setAboutMeData({
          title: data.aboutMe.title,
          subtitle: data.aboutMe.subtitle,
          fontColor: data.aboutMe.fontColor,
          backgroundColor: data.aboutMe.backgroundColor,
          isTransparent: data.aboutMe.isTransparent,
          isVisible: data.aboutMe.isVisible,
        });

        setUploadedImages(data.uploadedImages);
        setViewType(data.viewType);
        setBackgroundImage(data.backgroundImage);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [profileId]);



  // Components order
  const [componentOrder, setComponentOrder] = useState([
    { id: 'ProfileHeader', component: 'ProfileHeader' },
    { id: 'OwnerInfoEditor', component: 'OwnerInfoEditor' },
    { id: 'AboutMeEditor', component: 'AboutMeEditor' },
    { id: 'AdditionalInfoCardEditor', component: 'AdditionalInfoCardEditor' },
    { id: 'ImagesCardEditor', component: 'ImagesCardEditor' },
    { id: 'ContactIconsEditor', component: 'ContactIconsEditor' },
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

  const handleSave = async () => {
    console.log('Profile:', profile);
    console.log('User ID:', userId);

    const formData = new FormData();

    formData.append('profile', JSON.stringify(profile));
    formData.append('userId', JSON.stringify(userId));
    formData.append('ownerInfo', JSON.stringify(ownerInfo))
    formData.append('additionalInfo', JSON.stringify(additionalInfo))
    formData.append('backgroundImage', JSON.stringify(backgroundImage))
    formData.append('aboutMeData', JSON.stringify(aboutMeData))
    formData.append('uploadedImages', JSON.stringify(uploadedImages))

    if (profile.profilePicFile) {
      console.log('Appending Image File:', profile.profilePicFile);
      formData.append('profilePicFile', profile.profilePicFile);
    }

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };



  const handleAdditionalInfoChange = (updatedInfo, visibility) => {
    setAdditionalInfo(updatedInfo);
    setShowAdditionalInfoCard(visibility); // Sync visibility state
  };


  const handleUpdateProfile = async () => {
    const profileData = {
      ...profile,
      ownerInfo,
      aboutMe: aboutMeData,
      uploadedImages,
    };

    try {
      const response = await updateProfile(profileId, profileData);
      console.log('Profile updated:', response);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  const [uploadedImages, setUploadedImages] = useState([]); // Initialize as an empty array

  const [aboutMeStyle, setAboutMeStyle] = useState({
    backgroundColor: '#fff',
    textColor: '#000',
    fontSize: '16px',
    isTransparent: false, // Default to non-transparent
  });


  return (
    <Container>
      <Row>
        <Col>
          <div
            className="editors-section"
            style={{
              flex: '0 0 300px',
              backgroundColor: '#f8f9fa',
              padding: '20px',
              overflowY: 'auto',
              borderRight: '1px solid #ddd',
            }}
          >
            <BackgroundImageEditor onBackgroundChange={setBackgroundImage} />

            {/* Editor Section */}
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
                {item.component === 'ContactIconsEditor' && (
                  <ContactIconsEditor
                    profile={profile}
                    iconsEnabled={iconsEnabled}
                    onToggleIcon={toggleIcon}
                    moveUp={() => moveComponentUp(index)}
                    moveDown={() => moveComponentDown(index)}
                    isFirst={index === 0}
                    isLast={index === componentOrder.length - 1}
                  />
                )}
                {item.component === 'AboutMeEditor' && (
                  <>
                    <AboutMeEditor
                      aboutMeData={aboutMeData}
                      setAboutMeData={setAboutMeData}
                      styleConfig={aboutMeStyle}
                      setStyleConfig={setAboutMeStyle}
                      moveUp={() => moveComponentUp(index)}
                      moveDown={() => moveComponentDown(index)}
                      isFirst={index === 0}
                      isLast={index === componentOrder.length - 1}
                    />
                  </>

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
                    onImagesUpload={setUploadedImages} 
                    onViewTypeChange={setViewType} 
                    moveUp={() => moveComponentUp(index)}
                    moveDown={() => moveComponentDown(index)}
                    isFirst={index === 0}
                    isLast={index === componentOrder.length - 1}
                    />

                )}
              </div>
            ))}
          </div>
        </Col>
        <Col>
          {/* Preview Section */}
          <div
            className="device-frame"
            style={{
              width: '375px', // iPhone width
              height: '812px', // iPhone height
              margin: '20px auto', // Center the device
              border: '16px solid black', // Device border
              borderRadius: '40px', // Rounded edges for iPhone look
              overflow: 'hidden', // Hide overflowing content
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
              position: 'relative',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
              backgroundColor: '#fff',
            }}
          >
            {/* Notch */}
            <div
              style={{
                width: '210px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '10px',
                position: 'absolute',
                // top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            ></div>
            {/* Scrollable Content */}
            <div
              style={{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                padding: '20px', // Padding for content
                boxSizing: 'border-box',
              }}
            >
              {componentOrder.map((item) => {
                if (item.component === 'ProfileHeader') {
                  return <ProfilePetInfoCard key={item.id} name={profile.name} breed={profile.breed} subBreed={profile.subBreed} profilePic={profile.profilePic}
                  />;
                }
                if (item.component === 'ContactIconsEditor') {
                  return <ContactIcons key={item.id} profile={profile} iconsEnabled={iconsEnabled} />;
                }
                if (item.component === 'AboutMeEditor') {
                  // return <AboutMeCard key={item.id} title={aboutMeData.title} subtitle={aboutMeData.subtitle} />;
                  return <AboutMeCard
                    title={aboutMeData.title}
                    subtitle={aboutMeData.subtitle}
                    styleConfig={aboutMeStyle}
                  />
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
                if (item.component === 'ImagesCardEditor')
                  return <ImagesCard images={uploadedImages} viewType={viewType} />
              })}
            </div>
          </div>
          {/* Save Button */}
          <div
            className="save-button-container"
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
            }}
          >
            <button className="btn btn-primary" onClick={handleSave}>
              Save Profile
            </button>
            <div className="profile-container">
              {/* Existing editors here */}
              <button onClick={handleSave} className="btn btn-primary mt-3">
                Save Changes
              </button>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default Profile;
