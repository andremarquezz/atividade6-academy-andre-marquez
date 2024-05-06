import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { mockErrorInternalServer } from "../../fixtures/mocksErrors";
import { UserListPage } from "../pages/UserListPage";

const userListPage = new UserListPage();

Before({ tags: "@userList" }, () => {
  cy.viewport("macbook-16");
  cy.intercept("GET", "/api/v1/users").as("getAllUsers");
});

Before({ tags: "@userListEmpty" }, () => {
  cy.intercept("GET", "/api/v1/users", {}).as("getEmptyUsers");
});

Before({ tags: "@InternalError" }, () => {
  cy.intercept("GET", "/api/v1/users", {}).as("getEmptyUsers");
});

Given("que acesso a página de listagem de usuários", () => {
  cy.intercept("GET", "/api/v1/users", (req) => {
    if (Cypress.env("apiFailure")) {
      req.reply(mockErrorInternalServer);
    } else {
      req.continue();
    }
  }).as("getAllUsers");

  userListPage.visit();
  cy.wait("@getAllUsers");
});

Given("que acesso a página de listagem de usuários vazia", () => {
  userListPage.visit();

  cy.wait("@getEmptyUsers");
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

      userListPage.visit();
    }
  });
});

When("pesquisar por um nome de usuário", () => {
  cy.intercept("GET", "/api/v1/search?value=*").as("searchUser");

  cy.get("@getAllUsers").then(({ response }) => {
    const user = response.body[0];

    userListPage.typeSearchBar(user.name);
    cy.wait("@searchUser");
  });
});

When("pesquisar por um nome de usuário que não existe", () => {
  cy.intercept("GET", "/api/v1/search?value=*", []).as("searchUser");

  userListPage.typeSearchBar("Calabreso");
  cy.wait("@searchUser");
});

When("pesquisar por um email de usuário que não existe", () => {
  cy.intercept("GET", "/api/v1/search?value=*", []).as("searchUser");

  userListPage.typeSearchBar("jey@gmail.com");
  cy.wait("@searchUser");
});

Given("que a API de listagem de usuários esta offline", () => {
  Cypress.env("apiFailure", true);
});

When("pesquisar por um email de usuário", () => {
  cy.get("@getAllUsers").then(({ response }) => {
    const user = response.body[0];

    cy.intercept("GET", "/api/v1/search?value=*").as("searchUser");

    userListPage.typeSearchBar(user.email);
    cy.wait("@searchUser");
  });
});

When("não existem usuários cadastrados", () => {});

Then(
  "devo visualizar uma mensagem de erro informando que não foi encontrado nenhum usuário",
  () => {
    userListPage
      .getEmptyUserListMessage()
      .should("be.visible")
      .and("contain.text", "Ops! Não existe nenhum usuário para ser exibido.");
  }
);

Then(
  "devo visualizar uma mensagem de erro informando que não foi possível carregar a lista de usuários",
  () => {
    userListPage
      .getModalErrorServerMessage()
      .should("be.visible")
      .and(
        "contain.text",
        "Não foi possível consultar os usuários cadastrados."
      );
  }
);

Then("devo visualizar o nome e email do usuário pesquisado", () => {
  cy.get("@getAllUsers").then(({ response }) => {
    const user = response.body[0];
    const truncatedEmail = user.email.substring(0, 21);

    userListPage
      .getName()
      .should("be.visible")
      .and("contain.text", `Nome: ${user.name}`);
    userListPage
      .getEmail()
      .should("be.visible")
      .and("contain.text", `E-mail: ${truncatedEmail}`);
  });
});

Then("devo visualizar uma ancora para a página de cadastro de usuários", () => {
  userListPage
    .getEmptyUserListMessage()
    .should("be.visible")
    .and("contain.text", "Ops! Não existe nenhum usuário para ser exibido.");

  userListPage
    .getNewUserAnchor()
    .should("be.visible")
    .and("contain.text", "Cadastre um novo usuário");
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
