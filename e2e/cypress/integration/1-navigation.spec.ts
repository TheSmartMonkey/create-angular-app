/// <reference types="cypress" />

describe('navigation scenario', () => {
  it('navigate throw the app', () => {
    cy.visit('/home');
    cy.contains('home works!');
    cy.get('[data-test="home-page"]').contains('home works!');

    cy.visit('/login');
    cy.contains('login works!');
    cy.get('[data-test="login-page"]').contains('login works!');

    cy.visit('/trying-a-fake-root');
    cy.contains('page not found works!');
    cy.get('[data-test="not-found-page"]').contains('page not found works!');
  });
});
