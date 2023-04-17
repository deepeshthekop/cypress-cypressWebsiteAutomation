/// <reference types = "cypress" />


it('google test', function() {
    cy.visit('https://google.com')
    cy.get('#SIvCob > a').click()
    cy.wait(2000)
    cy.get('.gLFyf').type('cypress{enter}')
    cy.get('.MUFPAc > :nth-child(2) > a').click()
})