/// <reference types="Cypress" />
describe.only('Testes funcionais da página que exibe as pautas cadastradas', () => {

    beforeEach(() => {
        cy.visit("https://votacao-mgdy.onrender.com/");
    });

    it('Deve encontrar o filtro', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r4\\:').click()
        cy.get('.chakra-form-control')
            .should('be.visible')
            .and('contain', 'Filtrar por categoria:')
        cy.get('#categoria')
            .should('be.visible')
            .and('contain', 'TODAS')
    })

    it('Deve encontrar o titulo', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r4\\:').click()
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Pautas')    
    })

})