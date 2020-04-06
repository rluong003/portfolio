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

const HeadContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 50px;
`

const BodyContainer = styled.div`
  width: 100%;
  padding: 75px 0;
  background-color: rgb(247, 250, 252);

  display: flex;
  flex-wrap: wrap;
`
const BodyRow = styled.div`
  text-align: center;
  width: 100%;
  padding: 25px 0;
  font-size: 24px;
`
const BodyCol = styled.div`
  position: relative;
  width: 30%;
  padding: 0 15px;
  font-size: 18px;
  left: 100px;
  margin: 0 15px;
`
const ProjectItem = styled.div`
  width: 100%;
  margin: 0 auto 50px auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeadContainer>
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
        <FaLinkedin size="64px" />
      </a>

      <a
        href="https://github.com/rluong003"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare size="64px" />
      </a>
    </HeadContainer>

    <BodyContainer id="about">
      <BodyRow>
        <h2> About Me</h2>
      </BodyRow>
      <BodyCol>
        <img src="https://picsum.photos/360/540" alt="placeholder" />
      </BodyCol>

      <BodyCol>
        <p>
          I'm an aspiring software engineer based in the San Francisco Bay Area.
          I'm passionate about solving difficult problems and building beautiful
          products
        </p>

        <p>
          My initial interest in technology came at a young age with my love for
          video games. I eventually decided to major in Computer Science at the
          University of California, Riverside.
        </p>
        <p>
          Currently I'm interested in web development, web design, and machine
          learning. I have also maintained my interest for video game
          development.
        </p>
        <p>
          In my free time, I love to explore the San Francisco Bay Area with my
          friends. I also enjoy watching sports, discovering new music, and
          finding the next wave in fashion.
        </p>
      </BodyCol>
    </BodyContainer>

    <BodyContainer id="projects">
      <BodyRow>
        <h2> Projects</h2>
      </BodyRow>
      <ProjectItem>
        <h2>
          <a href="https://github.com/rluong003/shoe-store"> Shoe Store Website </a>
        </h2>

        <p>
          Website for a San Francisco based shoe store currently in development.{" "}
        </p>
        <p>
          Redux used to handle global state, React for the frontend, Firebase on
          the backend.
        </p>
        <p>Stripe API for payment services.</p>
      </ProjectItem>

      <ProjectItem>
        <h2>
          <a href="https://github.com/rluong003/portfolio"> Portfolio Website </a>
        </h2>

        <p>
          This website was created with Gatsby.JS, a React based framework.
          Utilizes graphql for blog queries and styled components library for
          styling.
        </p>
      </ProjectItem>

      <ProjectItem>
        <h2>
          <a href="https://github.com/rluong003/LedMatrixPong"> LED Matrix Pong </a>
        </h2>

        <p>
          Programmed the classic game Pong onto an 8x8 LED matrix, written in C.
          Used an ATmega1284 microcontroller, shift registers, buttons, a
          breadboard, an lcd screen, and Atmel Studios. Game Logic utilizes
          state machines.{" "}
        </p>
      </ProjectItem>

      <ProjectItem>
        <h2>
          <a href="https://github.com/rluong003/project-titanium-octopus"> First Person Shooter Group Project </a>
        </h2>

        <p>
          First person shooter made in Unity. This project was created in a
          group, and we used Agile methodology to manage our project
          development.{" "}
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sd33ttNO7n0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ProjectItem>
    </BodyContainer>
  </Layout>
)

export default IndexPage
