import styled from '@emotion/styled';
import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, selectedCategory }) => {
  return (
    <Wrap>
      {posts.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </Wrap>
  );
};

export default PostList;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
