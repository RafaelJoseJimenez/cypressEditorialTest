///<reference types="Cypress"/>

import HomePage from '../support/pageObjects/HomePage.js'
import EbooksPage from '../support/pageObjects/EbooksPage.js'

describe('comprar un libro de 0 euros y verificar que se puede entrar y el libro esta disponible', function () {
  const homePage = new HomePage()
  const ebooksPage = new EbooksPage()

  it('openPage', function () {
    cy.visit('https://www.colex.es/')
  })

  it('open ebooks menu', function () {
    homePage.getEbooksPage().click({ force: true })
  })

  it('open book info page', function () {
    cy.get('.q-card__section >>h3 a[href="/libros/interes-superior-menor-custodia-monoparental-1087"]').click()
  })
  it('addCart', function () {
    cy.get('#buy_now').click({ force: true })
  })
  it('completeForm', function () {

    cy.get('[aria-label="Nombre y Apellidos / Razón Social"]').type('Rafael Jose Jimenez')
    cy.get('[aria-label="CIF/NIF"]').type('75156492j')
    cy.get('[aria-label="Email"]').type('rafajimenez.gr@gmail.com')
    cy.get('[aria-label="Número de Teléfono"]').type('633806374')
    cy.get('[aria-label="Dirección"]').type('costa Rica')
    cy.get('[aria-label="Código Postal"]').type('28007')
    cy.get('[aria-label="Municipio"]').clear().type('A Coruña')
    cy.get('[aria-label="Provincia"]').click({ force: true })
    cy.get('.q-menu').as('provinciaList').invoke('attr', 'style', 'visibility:visible')
    cy.get('.q-item__label>span').contains('La Coruña').click()
    cy.get('[data-testid="process-cart-btn-secondary"]').click()
    


  })
  it('confirmToBuy', function () {
    cy.get('[data-testid="confirm-cart-btn"]').click()

  })

  it('alert', function () {
    cy.get('.q-card.q-dialog-plugin.ask-proceed-order-dialog').invoke('attr', 'style', 'display:block')
    cy.get('button[data-autofocus="true"]').click()
    cy.get('.q-card.q-dialog-plugin.thanks-for-purchase-email').invoke('attr', 'style', 'display:block')
    cy.get('.q-card__actions .q-btn').click()

  })

  it('toAccess', function () {
    cy.get('[aria-label="Usuario"]').type('rafajimenez.gr@gmail.com')
    cy.get('[aria-label="Contraseña"]').type('Rafa1985')
    cy.get('[data-testid="login-submit-btn"] > .q-btn__content').click()

  })

  it('accessToMisLIbros', function () {
    cy.get('[data-testid="profile-btn"] > .q-btn__content').click()
  })

  it('MiPerfil', function () {
    cy.get('.q-splitter__before > [data-testid="profile-options-list"]').invoke('attr', 'style', 'display:block')
    cy.get('.q-splitter__panel .q-list > a[href="/perfil/mis-libros"]').click()

  })

  it('reopenEbooksMenu', function () {
    homePage.getEbooksPage().click({ force: true })
  })

  it('reopenBookInfoPage', function () {
    cy.get('.q-card__section >>h3 a[href="/libros/interes-superior-menor-custodia-monoparental-1087"]').click()
  })
  it('addCartAgain', function () {
    cy.get('#buy_now').click({ force: true })

  })

  it('BuyDefinitly', function(){
    cy.get('[data-testid="process-cart-btn-secondary"]').click()

  })
  it('reconfirmToBuy', function () {
    cy.get('[data-testid="confirm-cart-btn"]').click()
    cy.get('.q-card.q-dialog-plugin.process-order-dialog').invoke('attr', 'style', 'display:block')
    cy.get('.q-card__actions > :nth-child(1) > .q-btn__content').click()
    cy.get('.q-card.q-dialog-plugin.ask-proceed-order-dialog ').invoke('attr', 'style', 'display:block')
    cy.get('.bg-positive > .q-btn__content').click()
    cy.get('div[class*="order-succeded"]').invoke('attr', 'style', 'visibility:visible')
    cy.get('[data-autofocus="true"]').click()
  })
  it('accessToMisLIbros', function () {
    cy.get('[data-testid="profile-btn"] > .q-btn__content').click()
  })

  it('MiPerfil', function () {
    cy.get('.q-splitter__before > [data-testid="profile-options-list"]').invoke('attr', 'style', 'display:block')
    cy.get('.q-splitter__panel .q-list > a[href="/perfil/mis-libros"]').click()

  })

  it('mislibros', function(){
    cy.visit('https://www.colex.es/perfil/mis-libros')
  })
})



