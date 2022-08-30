class ShoppingCart{

    addName(){
        return cy.get('[aria-label="Nombre y Apellidos / Razón Social"]')
    }

    addNIF(){
        return  cy.get('[aria-label="CIF/NIF"]')
    }
    
    addMail(){
        return cy.get('[aria-label="Email"]')
    }

    addTlf(){
        return cy.get('[aria-label="Número de Teléfono"]')
    }

    AddAddress(){
        return cy.get('[aria-label="Dirección"]')
    }

    AddPostal(){
        return cy.get('[aria-label="Código Postal"]')
    }
    
    AddTown(){
        return cy.get('[aria-label="Municipio"]')
    }
    
    OpenProvinceMenu(){
        return  cy.get('[aria-label="Provincia"]')
    }
    
    KeepOpenProvinceMenu(){
        return cy.get('.q-menu')
    }

    SelectProvince(){
        return cy.get('.q-item__label>span')
    }

    ConfirmData(){
        return cy.get('[data-testid="process-cart-btn-secondary"]')
    }


}

export default ShoppingCart;