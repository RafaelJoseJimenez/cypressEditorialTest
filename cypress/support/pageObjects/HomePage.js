class HomePage{
    openNav
    
    getEbooksPage(){
        
        return  cy.get('div[class^="q-tabs_"] a[href="/ebooks-gratuitos"')
    }
}

export default HomePage;