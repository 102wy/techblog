import styled from '@emotion/styled';
import React from 'react';
import Profile from './Profile';

const Header = () => {
    return (
        <Wrap>
            <Content>
                <Profile />
                <>
                    <Subtitle>Nice to Meet You,</Subtitle>
                    <Title>Tech blog</Title>
                </>
            </Content>
        </Wrap>
    );
};

export default Header;

const Wrap = styled.div`
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        padding: 0 20px;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 768px;
    height: 400px;
    justify-content: center;
`

const Subtitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`

const Title = styled.p`
    margin-top: 5px;
    font-size: 35px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 25px;
    }
`