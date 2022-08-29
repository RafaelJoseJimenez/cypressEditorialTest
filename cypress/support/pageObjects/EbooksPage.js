class EbooksPage{
    getBookInfoPag(){
        return cy.get('.books-grid > div > :has(a[href*="interes-superior"])')
    }
}

export default EbooksPage;