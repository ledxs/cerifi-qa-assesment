class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[data-test="username"]'),
    passwordInput: () => cy.get('input[data-test="password"]'),
    loginButton: () => cy.get('input[data-test="login-button"]')
  };

  visit() {
    cy.visit('/');
  }

  performLogin(username, password) {
    this.visit();
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }
}

export default LoginPage;
