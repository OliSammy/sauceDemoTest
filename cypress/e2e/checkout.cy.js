import { catalogLocators } from '../support/locators/catalog';
import { cartLocators } from '../support/locators/cart';
import { checkoutActions } from '../support/commands/checkout';

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
    cy.get(catalogLocators.addToCartButton).first().click();
    cy.get(cartLocators.cart).click();
    cy.get(cartLocators.checkoutButton).click();
  });

  it('CK-01 - Checkout com dados válidos', () => {
    cy.get(cartLocators.firstNameInput).type('Samuel');
    cy.get(cartLocators.lastNameInput).type('Silva');
    cy.get(cartLocators.postalCodeInput).type('12345');
    cy.get(cartLocators.continueButton).click();

    cy.get(cartLocators.finishButton).should('be.visible');
  });

  it('CK-02 - Checkout com dados incompletos', () => {
    cy.get(cartLocators.firstNameInput).type('Samuel');
    cy.get(cartLocators.lastNameInput).type('Silva');
    cy.get(cartLocators.continueButton).click();

    cy.get(cartLocators.errorMessage).should('contain.text', 'Error: Postal Code is required');
  });

  it('CK-03 - Cancelar checkout', () => {
    cy.get(cartLocators.cancelButton).click();

    cy.get(cartLocators.cartItem).should('be.visible');
  });

  it('CK-04 - Verificar mensagens de erro no checkout', () => {
    cy.get(cartLocators.continueButton).click();

    cy.get(cartLocators.errorMessage).should('contain.text', 'Error: First Name is required');
  });

  it('CK-05 - Validar resumo da compra', () => {
    cy.get(cartLocators.firstNameInput).type('Samuel');
    cy.get(cartLocators.lastNameInput).type('Silva');
    cy.get(cartLocators.postalCodeInput).type('12345');
    cy.get(cartLocators.continueButton).click();

    cy.get(cartLocators.cartItem).should('be.visible');
    cy.get(cartLocators.subtotalLabel).should('be.visible');
    cy.get(cartLocators.taxLabel).should('be.visible');
    cy.get(cartLocators.totalLabel).should('be.visible');
  });

  it('CK-06 - Validar cálculo do total', () => {
    cy.get(cartLocators.firstNameInput).type('Samuel');
    cy.get(cartLocators.lastNameInput).type('Silva');
    cy.get(cartLocators.postalCodeInput).type('12345');
    cy.get(cartLocators.continueButton).click();

    checkoutActions.verifyTotal();
  });

  it('CK-07 - Finalizar compra com sucesso', () => {
    cy.get(cartLocators.firstNameInput).type('Samuel');
    cy.get(cartLocators.lastNameInput).type('Silva');
    cy.get(cartLocators.postalCodeInput).type('12345');
    cy.get(cartLocators.continueButton).click();
    cy.get(cartLocators.finishButton).click();

    cy.get(cartLocators.completeHeader).should('contain.text', 'Thank you for your order');
  });

  it('CK-08 - Validar que o carrinho é esvaziado após finalizar', () => {
    cy.get(cartLocators.firstNameInput).type('Samuel');
    cy.get(cartLocators.lastNameInput).type('Silva');
    cy.get(cartLocators.postalCodeInput).type('12345');
    cy.get(cartLocators.continueButton).click();
    cy.get(cartLocators.finishButton).click();

    cy.get(cartLocators.cart).click();
    cy.get(cartLocators.cartItem).should('not.exist');
  });
});
