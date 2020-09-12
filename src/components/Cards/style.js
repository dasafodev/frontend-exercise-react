import styled, { css } from 'styled-components'

export const StyleCard = styled.article`
  width: 25%;
  height: auto;
  padding: 0;
  margin: 0 10px 0 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`
export const Information = styled.section`
  padding: 15px;
  /* white-space: nowrap; */

  height: 30%;
`

export const InformationText = styled.p`
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.6);
`

export const Title = styled.h2`
  font-size: 28px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`
