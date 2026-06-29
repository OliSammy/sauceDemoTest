import { catalogLocators } from '../locators/catalog';

export const catalogActions = {

    verifyPriceOrder(ascending = true) {

        const prices = [];
        // Adicionando os preços dos itens ao array prices
        cy.get(catalogLocators.inventoryItemPrice)
            .each(($price) => {

                prices.push(
                    Number($price.text().replace('$', ''))
                );

            })
            // Verificando se os preços estão em ordem crescente ou decrescente
            .then(() => {

                const sortedPrices = [...prices].sort((a, b) =>
                    ascending ? a - b : b - a
                );
                // Comparando os preços originais com os preços ordenados
                expect(prices).to.deep.equal(sortedPrices);

            });

    },

    verifyNameOrder(ascending = true) {

        const names = [];
        // Adicionando os nomes dos itens ao array names
        cy.get(catalogLocators.inventoryItemName)
            .each(($name) => {

                names.push($name.text().trim());

            })
        // Verificando se os nomes estão em ordem alfabética crescente ou decrescente
            .then(() => {

                const sortedNames = [...names].sort((a, b) =>
                    ascending
                        ? a.localeCompare(b)
                        : b.localeCompare(a)
                );
                // Comparando os nomes originais com os nomes ordenados
                expect(names).to.deep.equal(sortedNames);

            });

    }

};