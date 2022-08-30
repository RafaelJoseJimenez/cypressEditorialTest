class Login{

    insertUser(){
        return   cy.get('[aria-label="Usuario"]')
    }

    insertPassword(){
        return   cy.get('[aria-label="Contraseña"]')
    }

    toAccess(){
        return  cy.get('[data-testid="login-submit-btn"] > .q-btn__content')
    }
}

export default Login