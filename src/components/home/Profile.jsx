import styled from '@emotion/styled';
import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const Profile = ({ profileImage }) => {
  return <ProfileImagesWrap image={profileImage} alt='프로필 이미지' />;
};

export default Profile;

const ProfileImagesWrap = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
