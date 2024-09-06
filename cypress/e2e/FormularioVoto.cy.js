/// <reference types="Cypress" />
describe.only('Testes funcionais do formulario de votação', () => {

    beforeEach(() => {
        cy.visit("https://votacao-mgdy.onrender.com/");
    })

    it('Deve permitir votar', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        cy.get('input[name="titulo"]').type("Java é uma linguagem de programação ?")
        cy.get('input[name="descricao"]').type("Você considera o Java uma linguagem de programação ou acredita que ele se encaixa em outra categoria de tecnologia?")
        cy.get('select[name="categoria"]').select("TECNOLOGIA")
        cy.get('input[name="ativaSessao"]').check({ force: true })
        cy.get('input[name="tempoSessao"]').type("5")
        cy.get('.submit > :nth-child(2)').click({ force: true })
        
        cy.wait(10000)
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r5\\:').click()
        cy.get('input[name="nome"]').type("Juliana")
        cy.get('input[name="cpf"]').clear().type("122.441.575-20")
        cy.get('.submit > :nth-child(2)').click({ force: true })

        cy.wait(10000)
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r4\\:').click()
        cy.get('.sc-braxZu').click()
        cy.get('input[name="cpf"]').clear().type("122.441.575-20")
        cy.get('input[name="tipo"][value="SIM"]').check({ force: true })
        cy.get('.submit > :nth-child(2)').click({ force: true })
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Voto inserido com sucesso!')
    })

    it('Não deve permitir votar, por duplicidade de voto', () => {
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r4\\:').click()
        cy.get('.sc-braxZu').click()
        cy.get('input[name="cpf"]').clear().type("122.441.575-20")
        cy.get('input[name="tipo"][value="SIM"]').check({ force: true })
        cy.get('.submit > :nth-child(2)').click({ force: true })
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Ocorreu algum problema, tente novamente por favor!')
    })

})