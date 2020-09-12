import styled from 'styled-components'

export const FooterContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`
export const Article = styled.article`
  padding: 20px;
`

export const ContentContainer = styled.div`
  height: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ListItem = styled.li`
  margin: 15px 0;
`
export const Button = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
`
export const Date = styled.strong`
  margin: 15px 0;
`
