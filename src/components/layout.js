/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
height: 100%;
`

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  
  
`
const Footer = styled.footer`
padding-top: 50px;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Wrapper>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />

          {children}
          <Footer>
            © {new Date().getFullYear()} Richard Luong, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Container>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
