describe("Filter functionality", () => {
  let userUrl;

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.users = users;
      cy.login(this.users.filterUser.email, this.users.filterUser.password);

      cy.generateUserUrl(this.users.filterUser.email).then((url) => {
        userUrl = url;

        cy.origin(userUrl, () => {
          cy.url().should("not.include", "/auth/login");
          cy.get('[data-testid="avatar-menu-btn"]').should("be.visible");
        });
      });
    });
  });

  it("should verify results with created filter and without filter", () => {
    cy.origin(userUrl, () => {
        cy.get('[data-test="pipeline-deal-tile"]').its("length").should("be.gt", 1);

        // create filter
        cy.get('[data-testid="filter-menu-button"]').click();
        cy.get('[data-testid="add-filter-button"]').click();
        cy.get('[data-testid="field-selector-option-label"]').click();
        cy.get('[data-testid="labels-placeholder"]').click();
        cy.get('[data-testid="labels-option-badge"]').click();
        cy.get('[data-testid="save-button"]').click();

        // verify filter show results
        cy.get('[data-test="pipeline-deal-tile"]').should("be.visible").and("have.length", 1);

        // delete filter
        cy.get('[data-testid="edit-current-filter-button"]').click();
        cy.get('[data-testid="delete-button"]').click();
        cy.get('[data-testid="delete-confirmation-button"]').click();
                
        // verify results updated after delete filter
        cy.get('[data-test="pipeline-deal-tile"]').its("length").should("be.gt", 1);
    });
  });
});
