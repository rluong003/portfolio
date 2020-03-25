import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const NavContainer = styled.header`
  display: flex;

  width: 100%;
  margin-bottom: 20px;
`
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.875rem;
`
const LogoLink = styled(Link)`
text-decoration: none;
font-size: 18;
color: black;
`

const NavItems = styled.li `
display: inline;
margin-right: 20px;
text-decoration: none;
color: black;

`
const LinkContainer = styled.ul`
display: flex;
margin-left: auto;
`
const NavItem = styled.a `
font-size: 18px;
color: black;
font-weight: 700;

`

const Header = ({ siteTitle }) => {
  return (
    <NavContainer>
      <NavWrapper>
        <h1>
          <LogoLink to="/">{siteTitle}</LogoLink>
        </h1>

          <LinkContainer>
         <NavItems > <NavItem href="/#about">About</NavItem></NavItems> 
         <NavItems > <NavItem href="/#"> Projects </NavItem> </NavItems> 
         <NavItems > <NavItem href="/#"> Skills </NavItem></NavItems> 
         
         <NavItems > <NavItem href="/blog"> Blog </NavItem></NavItems> 


          </LinkContainer>
        

      </NavWrapper>
    </NavContainer>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
