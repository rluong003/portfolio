import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const BlogTitle = styled.h3`
  margin-bottom: 20px;

  color: blue;
  &:hover {
    color: #1dcaff;
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const BlogBody = styled.div`
  margin-bottom: 50px;
`

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <div>
      <h1>Posts</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogBody key={node.id}>
          <BlogLink to={`/blog` + node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} <span> - {node.frontmatter.date} </span>
            </BlogTitle>
          </BlogLink>
          <p> {node.excerpt} </p>
        </BlogBody>
      ))}

    </div>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
