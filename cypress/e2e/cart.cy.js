import { catalogLocators } from '../support/locators/catalog';
import { cartLocators } from '../support/locators/cart';
import { cartActions } from '../support/commands/cart';

describe('Carrinho de compras', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('CR-01 - Adicionar múltiplos produtos ao carrinho', () => {
    cy.get(catalogLocators.addToCartButton).eq(0).click();
    cy.get(catalogLocators.addToCartButton).eq(1).click();

    cy.get(cartLocators.cart).click();
    cy.get(cartLocators.cartItem).should('have.length', 2);
  });

  it('CR-02 - Remover um produto do carrinho', () => {
    cy.get(catalogLocators.addToCartButton).eq(0).click();
    cy.get(catalogLocators.addToCartButton).eq(1).click();

    cy.get(cartLocators.cart).click();
    cy.get(cartLocators.removeButton).first().click();

    cy.get(cartLocators.cartItem).should('have.length', 1);
  });

  it('CR-03 - Remover todos os produtos do carrinho', () => {
    cy.get(catalogLocators.addToCartButton).eq(0).click();
    cy.get(catalogLocators.addToCartButton).eq(1).click();

    cy.get(cartLocators.cart).click();
    cartActions.removeAllProducts();

    cy.get(cartLocators.cartItem).should('not.exist');
  });

  it('CR-04 - Continuar comprando', () => {
    cy.get(catalogLocators.addToCartButton).first().click();
    cy.get(cartLocators.cart).click();
    cy.get(cartLocators.continueShoppingButton).click();

    cy.get(catalogLocators.title).should('contain.text', 'Products');
  });

  it('CR-05 - Validar quantidade de itens no carrinho', () => {
    cy.get(catalogLocators.addToCartButton).eq(0).click();
    cy.get(catalogLocators.addToCartButton).eq(1).click();
    cy.get(catalogLocators.addToCartButton).eq(2).click();

    cy.get(catalogLocators.cartBadge).should('have.text', '3');
  });

  it('CR-06 - Verificar nome, descrição e preço no carrinho', () => {
    cy.get(catalogLocators.addToCartButton).first().click();
    cy.get(cartLocators.cart).click();

    cy.get(cartLocators.cartItemName).should('be.visible');
    cy.get(cartLocators.cartItemDescription).should('be.visible');
    cy.get(cartLocators.cartItemPrice).should('be.visible');
  });

  it('CR-07 - Validar persistência dos produtos ao navegar entre páginas', () => {
    cy.get(catalogLocators.addToCartButton).first().click();
    cy.get(catalogLocators.inventoryItemName).first().click();
    cy.get(catalogLocators.itemDescription).should('be.visible');
    cy.go('back');

    cy.get(cartLocators.cart).click();
    cy.get(cartLocators.cartItem).should('have.length', 1);
  });
});
