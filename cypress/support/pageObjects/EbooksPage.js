class EbooksPage {

    getBookInfoPag() {
        return cy.get('.q-card__section >>h3 a[href="/libros/interes-superior-menor-custodia-monoparental-1087"]')
    }
}

export default EbooksPage;