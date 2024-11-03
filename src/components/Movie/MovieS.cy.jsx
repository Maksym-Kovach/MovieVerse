import React from 'react'
import MovieS from './MovieS'

describe('<MovieS />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MovieS />)
  })
})