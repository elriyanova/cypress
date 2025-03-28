import LoginPage from "../pages/LoginPage";

Cypress.Commands.add("login", (email, password) => {
  LoginPage.login(email, password);
});

// Overwrite cy.visit() to handle retries on 429 errors
Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
    let attempts = 0;
  
    const retryVisit = () => {
      return originalFn(url, { ...options, failOnStatusCode: false }).then((response) => {
        if (response.status === 429 && attempts < retries) {
          attempts++;
          cy.wait(5000); // Wait for 5 seconds before retrying
          retryVisit();
        } else if (response.status === 429 && attempts >= retries) {
          throw new Error('Too many requests - 429 error after retrying');
        }
      });
    };
    return retryVisit();
  });
  
  
  