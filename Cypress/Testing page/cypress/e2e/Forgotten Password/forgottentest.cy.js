/// <reference types="cypress" />

//Esse teste tem como função testar a parte de recuperar senha do sistema Opencart

describe('forgotten-test', () => {
    beforeEach(() => {
      //Abrindo pelo index
      cy.visit('https://demo.opencart.com/')
      //Caminho que percorreremos até a parte
      cy.contains('My Account').click()
      cy.contains('Login').click()
      cy.wait(1000)
      //Esperar carregar página
      cy.contains('Forgotten Password').click()
      cy.wait(1000)
      //Esperar carregar página

    })

    //Teste para funcionalidade funcionando normalmente
    it('Resetar senha com sucesso', () => {
        cy.get('input[name = "email"]').type('claudio@mail.com'),
        cy.contains('Continue').click()
    })  
    
    //Teste para resetar senha sem informar email
    it('Resetar senha sem email', () => {
        cy.get('input[name = "email"]').clear(),
        cy.contains('Continue').click()
    })  

    //Teste para resetar senha sem informar um tipo de email valido
    it('Resetar senha sem formatação de email', () => {
        cy.get('input[name = "email"]').type('claudio'),
        cy.contains('Continue').click()
    })  
})