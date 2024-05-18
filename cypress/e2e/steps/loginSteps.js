/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que acesso o site", () => {
    cy.visit('https://www.saucedemo.com/v1/')
})

When("eu informo o usuário {string}", (user) => {
    if (user != '') {
        cy.get('[data-test="username"]').type(user)
    }
})

And("a digito a senha {string}", (senha) => {
    if (senha != '') {
        cy.get('[data-test="password"]').type(senha)  
    }    
})

And("confirmo", () => {
    cy.get('#login-button').click()
})

// Then('exibe "Products"', () => {
//     cy.get('.product_label').contains('Products')
// })

Then('exibe {string}', (titulo) => {
    cy.get('.product_label').contains(titulo)
})

Then('exibe a {string} de erro', (texto) => {
    cy.get('[data-test="error"]').should('have.text', texto)
})