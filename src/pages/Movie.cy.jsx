import React from 'react'
import Movie from './Movie'

describe('<Movie />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Movie />)
  })
})