import React from 'react'
import { Button, BtnList, Nav, Brand, BrandOrange } from './style'
export const Navbar = () => (
  <Nav>
    <Brand>
      Empresa<BrandOrange>.com</BrandOrange>
    </Brand>
    <ButtonsList />
  </Nav>
)

const ButtonsList = () => (
  <BtnList>
    <ButtonNavbar selected text="Inicio" />
    <ButtonNavbar text="Acerca" />
    <ButtonNavbar text="Servicios" />
    <ButtonNavbar text="Productos" />
    <ButtonNavbar text="Contacto" />
  </BtnList>
)

const ButtonNavbar = ({ text, selected }) => (
  <Button selected={selected}>{text}</Button>
)
