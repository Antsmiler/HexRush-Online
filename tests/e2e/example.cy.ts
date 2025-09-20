// example.cy.ts

describe('HexRush Client loads', () => {
  it('should show the Phaser canvas', () => {
    cy.visit('/');
    cy.get('canvas').should('exist');
  });
});
