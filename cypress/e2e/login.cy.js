import { loginLocators } from '../support/locators/login';

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('LG-01 - Login com usuário válido', () => {
    cy.fixture('login').then((user) => {
      cy.login(user.usernameValid, user.passwordValid);

      cy.get(loginLocators.productsTitle).should('contain.text', 'Products');
      cy.url().should('include', '/inventory.html');
    });
  });

  it('LG-02 - Login com usuário inválido', () => {
    cy.fixture('login').then((user) => {
      cy.login(user.usernameInvalid, user.passwordValid);

      cy.get(loginLocators.errorMessage).should('contain.text', 'Username and password do not match any user in this service');
    });
  });

  it('LG-03 - Login com senha incorreta', () => {
    cy.fixture('login').then((user) => {
      cy.login(user.usernameValid, user.passwordInvalid);

      cy.get(loginLocators.errorMessage).should('contain.text', 'Username and password do not match any user in this service');
    });
  });

  it('LG-04 - Login com usuário vazio', () => {
    cy.fixture('login').then((user) => {
      cy.login('', user.passwordValid);

      cy.get(loginLocators.errorMessage).should('contain.text', 'Username is required');
    });
  });

  it('LG-05 - Login com senha vazia', () => {
    cy.fixture('login').then((user) => {
      cy.login(user.usernameValid, '');

      cy.get(loginLocators.errorMessage).should('contain.text', 'Password is required');
    });
  });

  it('LG-06 - Login com usuário e senha vazios', () => {
    cy.login('', '');

    cy.get(loginLocators.errorMessage).should('contain.text', 'Username is required');
  });
});
