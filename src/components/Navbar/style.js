import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  ${(props) =>
    props.selected &&
    css`
      background: #db5230;
      color: white;
    `}
`

export const BtnList = styled.ul`
  display: grid;
  height: 30px;
  width: 500px;
  grid-template-columns: repeat(5, 1fr);
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5px;
`
export const Brand = styled.h1`
  font-size: 50px;
  font-weight: normal;
`

export const BrandOrange = styled.span`
  color: #db5230;
`
