import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe, 
  faUserFriends, 
  faHashtag, 
  faBuilding, 
  faHandshake, 
  faAd 
} from '@fortawesome/free-solid-svg-icons';

const LeadSource = ({ icon, name }) => {
  // Map string icon names to FontAwesome icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return faGlobe;
      case 'user-friends':
        return faUserFriends;
      case 'hashtag':
        return faHashtag;
      case 'building':
        return faBuilding;
      case 'handshake':
        return faHandshake;
      case 'ad':
        return faAd;
      default:
        return faGlobe; // Default fallback
    }
  };

  return (
    <div className="flex items-center">
      <FontAwesomeIcon 
        icon={getIcon(icon)} 
        className="mr-1.5 text-text-secondary" 
      />
      <span>{name}</span>
    </div>
  );
};

export default LeadSource;