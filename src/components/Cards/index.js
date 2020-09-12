/* eslint-disable jsx-quotes */
import React from 'react'
import { StyleCard, Img, Information, InformationText, Title } from './style'
export const Card = ({ photo, title, info, color }) => (
  <StyleCard>
    <Img src={photo} />
    <Information>
      <Title color={color}>{title}</Title>
      <hr />
      <InformationText>
        {info}
      </InformationText>
    </Information>
  </StyleCard>
)
