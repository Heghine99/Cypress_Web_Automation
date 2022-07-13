/// <reference types="cypress" />

describe("location change", () => {
  it("go test page", () => {
    cy.visit("http://localhost:3000");
    cy.get(".testBtn").click();
    cy.location("pathname", "http://localhost:3000/test");

    //     cy.location().should((loc) => {
    //       expect(loc.host).to.eq("localhost:3000");
    //       expect(loc.hostname).to.eq("localhost");
    //       expect(loc.href).to.eq("http://localhost:3000/test");
    //     });
  });

  it("go home page", () => {
    cy.visit("http://localhost:3000/test");
    cy.get(".testBtn").click();
    cy.location().should((loc) => {
      expect(loc.host).to.eq("localhost:3000");
      expect(loc.hostname).to.eq("localhost");
      expect(loc.href).to.eq("http://localhost:3000/");
    });
  });
});
