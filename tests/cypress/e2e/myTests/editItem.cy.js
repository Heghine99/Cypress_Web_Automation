/// <reference types="cypress" />


describe("edit item", ()=>{
    const name = 'Heghine';
    const lastName = 'Azatyan';

    it('typing input and adding item', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('.todo-input').type(name)
        cy.pause()
        cy.get('.todo-input').should('value',name)
        cy.get('button[datatype=btn]').click()
    })

    it('click button and edit item value', ()=>{
        cy.get('button[datatype=editItem]').click()

        cy.get('textarea[datatype=name]').should('have.text', name).clear()
        cy.wait(3000)
        cy.get('textarea[datatype=name]').type('Lilit')
        cy.get('textarea[datatype=name]').should('value', 'Lilit')
    })
})