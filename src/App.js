import React from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ListOfCards } from './components/ListOfCards'
import { GlobalStyle } from './styles/GlobalStyles'
import styled from 'styled-components'

export const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <hr />
    <Banner />
    <hr />
    <ListOfCards />
    <Footer />
  </>
)

const Title = styled.h2`
  font-size: 1em;
  font-weight:normal;
`
const Subtitle = styled.h3`
  font-size: 0.8em;
  color:rgba(0,0,0,.4);
  font-weight:normal;
  text-align:center;

`

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 60px;
  margin: 20px 0;
`

const Banner = () => (
  <Container>
    <Title>Soluciones corporativas</Title>
    <Subtitle>Lorem ipsum dolor sit amet, consectetuer adipscing elit</Subtitle>
  </Container>
)
