/// <reference types="cypress" />


describe("check correct value", ()=>{
    const name = 'Heghine';
    const lastName = 'Azatyan';

    it('click button and check item correct value', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('.addTodos').first().type('Heghine')
        cy.get('button[datatype=btn]').click()
        cy.get('textarea[datatype=name]').should('have.text', "Heghine")
    })
})