import React, { useMemo } from 'react';
import * as component from '../components';
import Seo from '../components/seo';
import GlobalStyle from '../components/common/GlobalStyle';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import queryString from 'query-string';

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list,
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });
          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  const parsed = queryString.parse(search);
  const selectedCategory = parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category;

  return (
    <component.Template gatsbyImageData={gatsbyImageData}>
      <GlobalStyle />
      <component.CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <component.PostList posts={edges} />
    </component.Template>
  );
};

export const Head = () => <Seo title='Home' />;

export default IndexPage;

// markdown 쿼리를 읽어옴
export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
