class MyProfilePage{

    keepMenuOpen(){
        return cy.get('.q-splitter__before > [data-testid="profile-options-list"]')
    }

    openMiBooks(){
        return cy.get('.q-splitter__panel .q-list > a[href="/perfil/mis-libros"]')
    }

}

export default MyProfilePage