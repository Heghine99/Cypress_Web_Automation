/// <reference types="cypress" />


describe("adding two item", ()=>{
    it('typing input and click button', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('.addTodos').eq(0).type('Azatyan')
        // cy.wait(2000)
        cy.get('input[type=text]').should('value','Azatyan')
        cy.get('button[datatype=btn]').click()

    })


    it('add new item and check all length', ()=>{
        cy.get('.addTodos').eq(0).type('Heghine')
        // cy.wait(2000)
        cy.get('input[type=text]').should('value','Heghine')
        cy.get('button[datatype=btn]').click()
        cy.get('.card').should('have.length', 2)
    })

    it('completed second item', ()=>{
        cy.get('li').eq(0).find('button[datatype=completedItem]').click()
        cy.get('button[datatype=completed]').click()
        cy.get('li').eq(0).find('span[datatype=done]').should('have.text', "done")
    })

    it('avtive first item', ()=>{
        cy.get('button[datatype=active]').click()
        cy.get('li').eq(1).find('span[datatype=done]').should('have.text', "")
    })

    
})