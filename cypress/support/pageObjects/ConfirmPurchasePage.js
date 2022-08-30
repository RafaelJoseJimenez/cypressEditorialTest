class ConfirmPurchasePage{

    ConfirmToBuy(){
        return cy.get('[data-testid="confirm-cart-btn"]')
    }

    firstAlert(){
        return cy.get('.q-card.q-dialog-plugin.ask-proceed-order-dialog')
    }

    firstAlertOk(){
         return cy.get('button[data-autofocus="true"]')
    }

    secondAlert(){
        return cy.get('.q-card.q-dialog-plugin.thanks-for-purchase-email')
    }

    secondAlertOk(){
        return cy.get('.q-card__actions .q-btn')
    }
}

export default ConfirmPurchasePage; 