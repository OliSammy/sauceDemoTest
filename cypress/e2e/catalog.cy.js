import {catalogLocators} from '../support/locators/catalog';
import {catalogActions} from '../support/commands/catalog';

describe('Catálogo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('CTG-01 - Exibir catálogo corretamente', () => {
    cy.get(catalogLocators.title).should('contain.text', 'Products');
    cy.get(catalogLocators.inventoryItems).should('have.length.at.least', 1);
  });

  it('CTG-02 - Adicionar produto ao carrinho', () => {
    cy.get(catalogLocators.addToCartButton).first().click();
    cy.get(catalogLocators.cartBadge).should('have.text', '1');
    cy.get(catalogLocators.removeButton).should('be.visible');
  });

  it('CTG-03 - Remover produto da página de produtos', () => {
    cy.get(catalogLocators.addToCartButton).first().click();
    cy.get(catalogLocators.removeButton).first().click();
    cy.get(catalogLocators.cartBadge).should('not.exist');
    cy.get(catalogLocators.addToCartButton).should('be.visible');
  });

  it('CTG-04 - Ordenar por preço crescente', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
    catalogActions.verifyPriceOrder();
  });

  it('CTG-05 - Ordenar por preço decrescente', () => {
    cy.get('.product_sort_container').select('Price (high to low)');
    catalogActions.verifyPriceOrder(false);
  });

  it('CTG-06 - Ordenar por nome A-Z', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');
    catalogActions.verifyNameOrder();
  });

  it('CTG-07 - Ordenar por nome Z-A', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    catalogActions.verifyNameOrder(false);
  });

  it('CTG-08 - Expandir item e verificar descrição e imagem', () => {
    cy.get(catalogLocators.inventoryItemName).first().click();
    cy.get(catalogLocators.itemDescription).should('be.visible');
    cy.get(catalogLocators.itemImage).should('be.visible');
  });

  it('CTG-09 - Adicionar múltiplos produtos', () => {
    cy.get(catalogLocators.addToCartButton).eq(0).click();
    cy.get(catalogLocators.addToCartButton).eq(1).click();
    cy.get(catalogLocators.addToCartButton).eq(2).click();

    cy.get(catalogLocators.cartBadge).should('have.text', '3');
  });

  it('CTG-10 - Remover um produto mantendo outros', () => {
    cy.get(catalogLocators.addToCartButton).eq(0).click();
    cy.get(catalogLocators.addToCartButton).eq(1).click();
    cy.get(catalogLocators.addToCartButton).eq(2).click();

    cy.get(catalogLocators.removeButton).eq(1).click();

    cy.get(catalogLocators.cartBadge).should('have.text', '2');
    cy.get(catalogLocators.removeButton).should('have.length', 2);
  });
});
