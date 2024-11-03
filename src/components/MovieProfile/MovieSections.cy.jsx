import React from 'react'
import MovieSections from './MovieSections'

describe('<MovieSections />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MovieSections />)
  })
})