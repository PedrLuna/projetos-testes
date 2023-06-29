/// <reference types="cypress" />

describe('login-test', () => {
    beforeEach(() => {
      //Abrindo pelo index
      cy.visit('https://demo.opencart.com/')
      //Caminho para chegar a página
      cy.contains('My Account').click()
      cy.contains('Login').click()
      cy.wait(1000)
      //Esperar carregar página

    })
  
    //Teste para ver o login com todas as informações corretas
    it('Fazer login com sucesso', () => {
        cy.get('input[name = "email"]').type('claudio@mail.com')
        cy.get('input[name = "password"]').type('senha123')
        cy.get('button[type = "submit"]').click()
    })  
    
    //Teste para logar preenchendo o email sem o tipo email
    it('Fazer login sem formatação de email', () => {
        cy.get('input[name = "email"]').type('claudio')
        cy.get('input[name = "password"]').type('senha123')
        cy.get('button[type = "submit"]').click()
      })   

    //Teste fazer login sem informar email
    it('Fazer login sem email', () => {
        cy.get('input[name = "email"]').clear()
        cy.get('input[name = "password"]').type('senha123')
        cy.get('button[type = "submit"]').click()
      })   

    //Teste para logar sem informar uma senha
    it('Fazer login sem senha', () => {
        cy.get('input[name = "email"]').type('claudio@mail.com')
        cy.get('input[name = "password"]').clear()
        cy.get('button[type = "submit"]').click()
      })   
    
    //Teste para logar sem preencher nada
    it('Fazer login sem preencher', () => {
        cy.get('input[name = "email"]').clear()
        cy.get('input[name = "password"]').clear()
        cy.get('button[type = "submit"]').click()
      })  

    

})