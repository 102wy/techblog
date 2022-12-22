import styled from '@emotion/styled';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';

const Template = ({ children, gatsbyImageData }) => {
  return (
    <Wrap>
      <Header profileImage={gatsbyImageData} />
      <GlobalStyle />
      {children}
      <Footer />
    </Wrap>
  );
};

export default Template;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
