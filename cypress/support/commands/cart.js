import { cartLocators } from '../locators/cart';

export const cartActions = {

    removeAllProducts() {

        cy.get('body').then(($body) => {

            if ($body.find(cartLocators.removeButton).length > 0) {

                cy.get(cartLocators.removeButton)
                    .first()
                    .click();

                this.removeAllProducts();

            }

        });

    }

};