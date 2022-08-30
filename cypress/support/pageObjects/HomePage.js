class HomePage {
    openNav

    getEbooksPage() {

        return cy.get('div[class^="q-tabs_"] a[href="/ebooks-gratuitos"')
    }

    getMyProfile(){
        return   cy.get('[data-testid="profile-btn"] > .q-btn__content')
    }
}

export default HomePage;