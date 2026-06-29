import { loginLocators } from '../locators/login';

Cypress.Commands.add('login', (username, password) => {
  
  //verificar se username e password são fornecidos antes de tentar digitar
    if (username) {
    cy.get(loginLocators.usernameInput).type(username);
  }

  if (password) {
    cy.get(loginLocators.passwordInput).type(password);
  }
  
  cy.get(loginLocators.loginButton).click();
});