/// <reference types="Cypress" />
describe.only('Teste funcional da página que exibe os usuarios cadastrados', () => {

    beforeEach(() => {
        cy.visit("https://votacao-mgdy.onrender.com/");
    });

    it('Deve encontrar o titulo', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r6\\:').click()
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Usuários registrados')    
    })

})