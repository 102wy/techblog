import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'

const CategoryList = ({ selectedCategory, categoryList }) => {
  return (
    <Wrap>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          key={name}
          to={`/?category=${name}`}
          active={name == selectedCategory}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </Wrap>
  )
}

export default CategoryList

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CategoryItem = styled(({ active, ...props }) => <Link {...props} />)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
