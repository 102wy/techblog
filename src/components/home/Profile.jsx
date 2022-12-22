import styled from '@emotion/styled';
import React from 'react';

const Profile = () => {
    return (
        <ProfileImagesWrap src='/images/profile.png' alt='프로필 이미지' />
    );
};

export default Profile;

const ProfileImagesWrap = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`