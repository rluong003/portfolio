import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const ImageContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`

const SectionContainer = styled.div`
  position: relative;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SectionContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <h1>Hi, I'm Richard</h1>
      <h3>a Software Engineer </h3>
      <a
        href="https://www.linkedin.com/in/richard-luong-a38111186/"
        target="_blank"
        rel="noopener noreferrer"
      >
        
        <FaLinkedin size="64px" />{" "}
      </a>

      <a href="https://github.com/rluong003" target="_blank" rel="noopener noreferrer">
        
        <FaGithubSquare size="64px" />{" "}
      </a>
    </SectionContainer>
  </Layout>
)

export default IndexPage
