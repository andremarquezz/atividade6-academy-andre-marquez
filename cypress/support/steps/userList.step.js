import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { UserListPage } from "../pages/UserListPage";

const userListPage = new UserListPage();

Before({ tags: "@userList" }, () => {
  cy.viewport("macbook-16");
  cy.intercept("GET", "/api/v1/users").as("getAllUsers");
});

Given("que acesso a página de listagem de usuários", () => {
  userListPage.visit();
  cy.wait("@getAllUsers");
});

When("existem usuários cadastrados", () => {
  cy.get("@getAllUsers").then(({ response: { body } }) => {
    if (body.length === 0) {
      const name = "Jeey";
      const email = faker.internet.email();

      cy.request("POST", "/api/v1/users", {
        name,
        email,
      });
    }
  });

  userListPage.visit();
});

Then("devo visualizar o nome e email de cada usuário", () => {
  cy.get("@getAllUsers").then(({ response: { body } }) => {
    const pageOne = body.slice(0, 5);

    pageOne.forEach((user) => {
      const truncatedEmail = user.email.substring(0, 21);

      userListPage.getName().should("contain.text", `Nome: ${user.name}`);
      userListPage
        .getEmail()
        .should("contain.text", `E-mail: ${truncatedEmail}`);
    });
  });
});
