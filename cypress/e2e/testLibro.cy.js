///<reference types="Cypress"/>

import HomePage from '../support/pageObjects/HomePage.js'
import EbooksPage from '../support/pageObjects/EbooksPage.js'
import MyEbookDetails from '../support/pageObjects/MyEbookDetails.js'
import ShoppingCart from '../support/pageObjects/ShoppingCart.js'
import ConfirmPurchasePage from '../support/pageObjects/ConfirmPurchasePage.js'
import Login from '../support/pageObjects/Login.js'
import MyProfilePage from '../support/pageObjects/MyProfilePage.js'

describe('comprar un libro de 0 euros y verificar que se puede entrar y el libro esta disponible', function () {
  const homePage = new HomePage()
  const ebooksPage = new EbooksPage()
  const myEbookDetails = new MyEbookDetails()
  const shoppingCart = new ShoppingCart()
  const confirmPurchasePage = new ConfirmPurchasePage()
  const login = new Login()
  const myProfilePage = new MyProfilePage()


  before(() => {
    cy.visit('https://www.colex.es/')
  })

  it('open ebooks menu', function () {
    homePage.getEbooksPage().click({ force: true })
  })

  it('open book info page', function () {
    ebooksPage.getBookInfoPag().click()
  })

  it('addCart', function () {
    myEbookDetails.addCart().click({ force: true })
  })

  it('completeForm', function () {
    shoppingCart.addName().type('Rafael Jose Jimenez')
    shoppingCart.addNIF().type('75156492j')
    shoppingCart.addMail().type('rafajimenez.gr@gmail.com')
    shoppingCart.addTlf().type('633806374')
    shoppingCart.AddAddress().type('costa Rica')
    shoppingCart.AddPostal().type('28007')
    shoppingCart.AddTown().clear().type('A Coruña')
    shoppingCart.OpenProvinceMenu().click({ force: true })
    shoppingCart.KeepOpenProvinceMenu().invoke('attr', 'style', 'visibility:visible')
    shoppingCart.SelectProvince().contains('La Coruña').click()
    shoppingCart.ConfirmData().click()
  })

  it('confirmToBuy & alert', function () {
    confirmPurchasePage.ConfirmToBuy().click()
    confirmPurchasePage.firstAlert().invoke('attr', 'style', 'display:block')
    confirmPurchasePage.firstAlertOk().click()
    confirmPurchasePage.secondAlert().invoke('attr', 'style', 'display:block')
    confirmPurchasePage.secondAlertOk().click()

  })

  it('toAccess', function () {
    login.insertUser().type('rafajimenez.gr@gmail.com')
    login.insertPassword().type('Rafa1985')
    login.toAccess().click()

  })

  it('accessMiPerfl', function () {
    homePage.getMyProfile().click()
  })

  it('MiPerfil', function () {
    myProfilePage.keepMenuOpen.invoke('attr', 'style', 'display:block')
    myProfilePage.openMiBooks.click()
  })
})



