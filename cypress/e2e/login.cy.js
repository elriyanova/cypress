import LoginPage from "../pages/LoginPage";

describe("Login Page tests", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      cy.wrap(users).as("users");
    });

    LoginPage.visit();
  });

  it("should login successfully with valid credentials", function () {
    LoginPage.login(this.users.validUser.email, this.users.validUser.password);
    cy.origin("https://tender-spike.pipedrive.com", () => {
        cy.url().should("not.include", "/auth/login");
        cy.get('[data-testid="avatar-menu-btn"]').should("be.visible");
      });
  });

  it("should show an error with invalid email and invalid password", function () {
    const email = LoginPage.generateRandomEmail();
    const password = LoginPage.generateRandomPassword();

    LoginPage.login(email, password);
    LoginPage.getErrorMessage().should("be.visible");
  });

  it("should show error for correct email with incorrect password", function () {
    const incorrectPassword = LoginPage.generateRandomPassword();

    LoginPage.login(this.users.validEmail.email, incorrectPassword);
    LoginPage.getAccountLockedMessage().should("be.visible");
  });

  it("should show an error when empty fields", function () {
    LoginPage.clickLogin();
    LoginPage.getEmailRequiredMessage().should("be.visible");
    LoginPage.getEmailInput().should("have.class", "puco-input--error");
    LoginPage.getPasswordRequiredMessage().should("be.visible");
  });

  it("should not allow login with only an email entered", function () {
    LoginPage.enterEmail(this.users.validUser.email);
    LoginPage.clickLogin();
    LoginPage.getPasswordRequiredMessage().should("be.visible");
    LoginPage.getPasswordInput().should("have.class", "puco-input--error");
  });

  it("should not allow login with only a password entered", function () {
    LoginPage.enterPassword(this.users.validUser.password);
    LoginPage.clickLogin();
    LoginPage.getEmailRequiredMessage().should("be.visible");
    LoginPage.getEmailInput().should("have.class", "puco-input--error");
  });
});
