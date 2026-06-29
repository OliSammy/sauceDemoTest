export const checkoutActions = {

    verifyTotal() {

        const getValue = (selector) => {
            return cy.get(selector)
                .invoke('text')
                .then(text =>
                    Number(text.replace(/[^0-9.]/g, ''))
                );
        };

        getValue(cartLocators.subtotalLabel).then((subtotal) => {

            getValue(cartLocators.taxLabel).then((tax) => {

                getValue(cartLocators.totalLabel).then((total) => {

                    expect(total).to.equal(subtotal + tax);

                });

            });

        });

    }

}