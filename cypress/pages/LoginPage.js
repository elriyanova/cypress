class LoginPage {
    visit() {
        cy.visit("https://app.pipedrive.com/auth/login");
    }
  
    getEmailInput() {
        return cy.get("#login");
    }
  
    getPasswordInput() {
        return cy.get("#password");
    }
  
    getLoginButton() {
        return cy.contains("span", "Log in");
    }
  
    getErrorMessage() {
        return cy.contains("Incorrect email or password");
    }
  
    getEmailRequiredMessage() {
        return cy.contains("Please add your email");
    }
  
    getPasswordRequiredMessage() {
        return cy.contains("Please add your password");
    }

    getAccountLockedMessage() {
        return cy.contains("Account locked");
    }

    generateRandomEmail() {
        const timestamp = new Date().getTime();
        return `testuser${timestamp}@example.com`;
      }
    
    generateRandomPassword() {
        return `Password${Math.floor(Math.random() * 10000)}`;
    }
  
    getAvatarMenuButton() {
        return cy.get('[data-testid="avatar-menu-btn"]');
    }
  
    enterEmail(email) {
        this.getEmailInput().clear().type(email);
    }
  
    enterPassword(password) {
        this.getPasswordInput().clear().type(password);
    }
  
    clickLogin() {
        this.getLoginButton().click();
    }
  
    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
  }
  
  export default new LoginPage();
  