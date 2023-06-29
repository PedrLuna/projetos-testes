/// <reference types="cypress" />

describe('register-test', () => {
    beforeEach(() => {
      //Abrir pelo index
      cy.visit('https://demo.opencart.com/')
      //Caminho até a página 
      cy.contains('My Account').click()
      cy.contains('Register').click()
      cy.wait(1000)
      //Esperar carregar página
    })
  
    //Teste para informar dados corretos
    it('Fazer registro com sucesso', () => {
      cy.get('input[name = "firstname"]').type('Claudio')
      cy.get('input[name = "lastname"]').type('Martins')
      cy.get('input[name = "email"]').type('claudio@mail.com')
      cy.get('input[name = "password"]').type('senha123')
      cy.get('input[type = "checkbox"]').check()
      cy.get('input[type = "radio"]').first().check()
      cy.contains('Continue').click()
    })   
    
    //Teste para não informar nenhum dado
    it('Fazer registro sem informações', () => {
        cy.get('input[name = "firstname"]').clear()
        cy.get('input[name = "lastname"]').clear()
        cy.get('input[name = "email"]').clear()
        cy.get('input[name = "password"]').clear()
        cy.get('input[type = "checkbox"]').check()
        cy.get('input[type = "radio"]').first().check()
        cy.contains('Continue').click()
      })  

      //Teste para informar um endereço de email inválido
      it('Fazer registro Email errado', () => {
        cy.get('input[name = "firstname"]').type('Joaquim')
        cy.get('input[name = "lastname"]').type('Freitas')
        cy.get('input[name = "email"]').type('889999999')
        cy.get('input[name = "password"]').type('senha123')
        cy.get('input[type = "checkbox"]').check()
        cy.get('input[type = "radio"]').first().check()
        cy.contains('Continue').click()
      })         

      //Teste para fazer o registro sem informar uma senha
      it('Fazer registro sem senha', () => {
        cy.get('input[name = "firstname"]').type('Claudio')
        cy.get('input[name = "lastname"]').type('Martins')
        cy.get('input[name = "email"]').type('claudio@mail.com')
        cy.get('input[name = "password"]').clear()
        cy.get('input[type = "checkbox"]').check()
        cy.get('input[type = "radio"]').first().check()
        cy.contains('Continue').click()
      })  

    //Teste para fazer registro sem sobrenome
    it('Fazer registro sem sobrenome', () => {
        cy.get('input[name = "firstname"]').type('Claudio')
        cy.get('input[name = "lastname"]').clear()
        cy.get('input[name = "email"]').type('claudio@mail.com')
        cy.get('input[name = "password"]').type('senha123')
        cy.get('input[type = "checkbox"]').check()
        cy.get('input[type = "radio"]').first().check()
        cy.contains('Continue').click()
      })     
      
      //Teste para fazer registro sem email
      it('Fazer registro sem email', () => {
          cy.get('input[name = "firstname"]').type('Claudio')
          cy.get('input[name = "lastname"]').type('Martins')
          cy.get('input[name = "email"]').clear()
          cy.get('input[name = "password"]').type('senha123')
          cy.get('input[type = "checkbox"]').check()
          cy.get('input[type = "radio"]').first().check()
          cy.contains('Continue').click()
        }) 

    //Teste para fazer registro sem nome
    it('Fazer registro sem nome', () => {
        cy.get('input[name = "firstname"]').clear()
        cy.get('input[name = "lastname"]').type('Martins')
        cy.get('input[name = "email"]').type('claudio@mail.com')
        cy.get('input[name = "password"]').type('senha123')
        cy.get('input[type = "checkbox"]').check()
        cy.get('input[type = "radio"]').first().check()
        cy.contains('Continue').click()
      }) 

    //Teste para fazer o registro sem preencher termos de uso
    it('Fazer registro sem preencher termos de uso', () => {
        cy.get('input[name = "firstname"]').type('Claudio')
        cy.get('input[name = "lastname"]').type('Martins')
        cy.get('input[name = "email"]').type('claudio@mail.com')
        cy.get('input[name = "password"]').type('senha123')
        // cy.get('input[type = "checkbox]"').check()
        cy.get('input[type = "radio"]').first().check()
        cy.contains('Continue').click()
      })

  })
  