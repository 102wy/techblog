import * as React from 'react'
import * as component from '../components'
import Seo from '../components/seo'
import GlobalStyle from '../components/common/GlobalStyle'
import styled from '@emotion/styled'

const IndexPage = () => {
  const CATEGORY_LIST = {
    All: 5,
    Web: 3,
    Mobile: 2,
  }

  return (
    <Wrap>
      <GlobalStyle />
      <component.Header />
      <component.CategoryList
        selectedCategory="Web"
        categoryList={CATEGORY_LIST}
      />
      <component.PostList />
      <component.Footer />
    </Wrap>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
