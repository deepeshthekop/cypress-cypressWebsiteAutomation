/// <reference types = "cypress" />

it('learning assertions', function() {
    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    
    //implicit assertion - 'should'
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')
    cy.get('#query-btn'). invoke('attr', 'id')
        .should('equal', 'query-btn')
    
    //implicit assertion - 'and'
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and ('have.class', 'query-btn')

    //explicit assertion - 'expect'
    let name = 'Deepesh'
    expect(name).to.be.equal('Deepesh')

    //explicit assertion - 'assert'
    assert.equal(4, '4', 'not equal')
    assert.strictEqual(4, 4, 'not strictly equal')
})