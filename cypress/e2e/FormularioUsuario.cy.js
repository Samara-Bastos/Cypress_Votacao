/// <reference types="Cypress" />
describe.only('Testes funcionais do formulario de usuario', () => {

    beforeEach(() => {
        cy.visit("https://votacao-mgdy.onrender.com/");
    })

    it('Deve encontrar o titulo', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r5\\:').click()
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Cadastro de usuário')     
    })

    it('Deve permitir inserir um novo usuario', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r5\\:').click()
        cy.get('input[name="nome"]').type("Juliana")
        cy.get('input[name="cpf"]').clear().type("376.579.340-00")
        cy.get('.submit > :nth-child(2)').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Usuário inserido com sucesso!')
    })

    it('Não deve permitir inserir um novo usuario', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r5\\:').click()
        cy.get('.submit > :nth-child(2)').click()
        cy.get('.chakra-form__error-message')
          .should('be.visible')
          .and('contain', 'O nome precisa ser preenchido')
        cy.get('.chakra-form__error-message')
          .should('be.visible')
          .and('contain', 'CPF inválido. Verifique o formato')
    })

    it('Deve ser redirecionado ao clicar no botão de voltar', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r5\\:').click()
        cy.get('a > .sc-braxZu').click()
        cy.url().should('include', '/visualizar') 
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Pautas')
    })

})