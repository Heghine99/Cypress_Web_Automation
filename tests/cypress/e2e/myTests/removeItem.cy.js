/// <reference types="cypress" />


describe("remove item", ()=>{
    const name = 'Heghine';
    const lastName = 'Azatyan';

    it('typing input and adding item', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('.todo-input').type(name)
        cy.pause()
        cy.get('.todo-input').should('value',name)
        cy.get('button[datatype=btn]').click()
    })

    it('click button and remove item', ()=>{
        cy.get('button[datatype=removeItem]').click()
        cy.get('.card').should('have.length', 0)
    })
})