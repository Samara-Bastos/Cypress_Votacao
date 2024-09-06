/// <reference types="Cypress" />
describe.only('Testes funcionais da home', () => {

    beforeEach(() => {
        cy.visit("https://votacao-mgdy.onrender.com/");
    });

    it('Deve encontrar o titulo', () => {
        cy.get('.sc-gJhJTp')
          .should('be.visible')
          .and('contain', 'Bem-vindo ao Sistema de Votação Online!')
    })

    it('Deve encontrar a imagem', () => {
        cy.get('.sc-jzjKHc > img')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })

    it('Deve ser redirecionado ao clicar no botão de cadastrar usuario', () => {
        cy.get('.sc-braxZu').click()
        cy.url().should('include', '/usuario') 
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Cadastro de usuário')
    })

})