import React from 'react'
import { Card } from '../Cards'
import { List } from './style'

const data = [
  {
    title: 'Consultoria',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    color: '#63799D',
    photo:
      'https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    title: 'Formación',
    info:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    color: '#6A9C99',
    photo:
      'https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    title: 'Análisis',
    info:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    color: '#DEBA6E',
    photo:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    title: 'Investigación',
    info:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    color: '#A86749',
    photo:
      'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
]
export const ListOfCards = () => (
  <List>
    {data.map((val) => (
      <Card key={val.title} {...val} />
    ))}
  </List>
)
