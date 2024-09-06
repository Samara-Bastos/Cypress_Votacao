/// <reference types="Cypress" />
describe.only('Testes funcionais do formulario da pauta', () => {

    beforeEach(() => {
        cy.visit("https://votacao-mgdy.onrender.com/");
    });

    it('Deve encontrar o titulo', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Cadastro de pauta')     
    })

    it('Deve permitir inserir uma nova pauta sem abrir uma sessão de votação pra mesma', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        cy.get('input[name="titulo"]').type("Java é uma linguagem de programação ?")
        cy.get('input[name="descricao"]').type("Você considera o Java uma linguagem de programação ou acredita que ele se encaixa em outra categoria de tecnologia?")
        cy.get('select[name="categoria"]').select("TECNOLOGIA")
        cy.get('.submit > :nth-child(2)').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Pauta inserida com sucesso!')
    })

    it('Deve permitir inserir uma nova pauta e abrir uma sessão de votação pra mesma', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        cy.get('input[name="titulo"]').type("Java é uma linguagem de programação ?")
        cy.get('input[name="descricao"]').type("Você considera o Java uma linguagem de programação ou acredita que ele se encaixa em outra categoria de tecnologia?")
        cy.get('select[name="categoria"]').select("TECNOLOGIA")
        cy.get('input[name="ativaSessao"]').check({ force: true })
        cy.get('input[name="tempoSessao"]').type("2")
        cy.get('.submit > :nth-child(2)').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Pauta inserida com sucesso!')
    })

    it('Não deve permitir inserir uma nova pauta', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        cy.get('.submit > :nth-child(2)').click()
        cy.get('.chakra-form__error-message')
          .should('be.visible')
          .and('contain', 'O título é obrigatório.')
        cy.get('.chakra-form__error-message')
          .should('be.visible')
          .and('contain', 'A categoria é obrigatória.')
    })

    it('Deve ser redirecionado ao clicar no botão de voltar', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        cy.get('a > .sc-braxZu').click()
        cy.url().should('include', '/visualizar') 
        cy.get('.sc-gJhJTp')
            .should('be.visible')
            .and('contain', 'Pautas')
    })

})