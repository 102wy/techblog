import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import PostHeadInfo from './PostHeadInfo';

const PostHead = ({ thumnail, title, date, categories }) => {
  return (
    <Wrap>
      <BackgroundImage image={thumnail} alt='thumbnail' />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </Wrap>
  );
};

export default PostHead;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BackgroundImage = styled(props => <GatsbyImage {...props} style={{ position: 'absolute' }} />)`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`;
