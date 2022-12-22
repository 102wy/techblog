import styled from '@emotion/styled';
import React from 'react';

const Footer = () => {
    return (
        <Wrap>
            Thank You for Visiting My Blog, Have a Good Day 😆
            <br />© 2021 Developer Hyun, Powered By Gatsby.
        </Wrap>
    );
};

export default Footer;

const Wrap = styled.div`
    display: grid;
    place-items: center;
    padding: 50px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
    margin-top: auto;
    @media (max-width: 768px) {
        font-size: 13px;
    }
`