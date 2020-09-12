import React from 'react'
import {
  FooterContainer,
  Article,
  Button,
  ListItem,
  ContentContainer,
  Date
} from './style'

const services = [
  'Consultoria Gerencial',
  'Analisis Regulatoria de Politicas',
  'Investigacion de Mercado',
  'Gestio de Proyectos',
  'Regulacion de Soporte',
  'Analisis de Riesgos',
  'Formacion Gerencial',
]

const news = [
  {
    id: 1,
    date: '09.09.2012',
    text:
      'Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Faucibus purus in massa tempor nec feugiat nisl pretium. Volutpat sed cras ornare arcu dui vivamus arcu',
  },
  {
    id: 2,
    date: '08.09.2012',
    text:
      'Blandit libero volutpat sed cras ornare arcu dui. Quam viverra orci sagittis eu volutpat odio. Morbi tristique senectus et netus et malesuada fames ac',
  },
]

export const Footer = () => (
  <FooterContainer>
    <FooterItem title="¡Bienvenido!" btnText="Leer más">
      <p>
        Dictumst quisque sagittis purus sit amet. Tincidunt vitae semper quis
        lectus nulla at volutpat diam. Sed arcu non odio euismod lacinia at quis
        risus. Aliquam ut porttitor leo a diam sollicitudin tempor id eu.
        <br />
        <br />
        Porttitor lacus luctus accumsan tortor posuere ac. Vulputate ut pharetra
        sit amet aliquam id diam. Et magnis dis parturient montes nascetur
        ridiculus. Leo integer malesuada nunc vel risus commodo viverra.
      </p>
    </FooterItem>
    <FooterItem title="Noticias Recientes" btnText="Mas noticias">
      {news.map((val) => (
        <News key={val.key} date={val.date}>{val.text}</News>
      ))}
    </FooterItem>
    <FooterItem title="Nuestros Servcios" btnText="Leer más">
      <ol>
        {services.map((val) => (
          <ListItem key={val}>{val}</ListItem>
        ))}
      </ol>
    </FooterItem>
  </FooterContainer>
)

const FooterItem = (props) => (
  <Article>
    <h2>{props.title}</h2>
    <hr />
    <ContentContainer>{props.children}</ContentContainer>
    <Button>{props.btnText}</Button>
  </Article>
)

const News = (props) => (
  <>
    <Date>Publicada: {props.date}</Date>
    <p>{props.children}</p>
  </>
)
