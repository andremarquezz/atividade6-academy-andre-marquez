import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import {
  mockErrorEmailAlreadyExists,
  mockErrorUserNotFound,
} from "../../fixtures/mocksErrors";
import { UserDetailsPage } from "../pages/UserDetailsPage";
import { UserListPage } from "../pages/UserListPage";

const userDetailsPage = new UserDetailsPage();
const userListPage = new UserListPage();
let user;

Before(() => {
  cy.createSingleUser().then((randomUser) => {
    user = randomUser;
  });

  cy.viewport("macbook-16");
  cy.intercept("GET", "/api/v1/users/*").as("getUserById");
});

Before({ tags: "@userNotFound" }, () => {
  cy.viewport("macbook-16");
  cy.intercept("GET", "/api/v1/users/*", mockErrorUserNotFound).as(
    "userNotFound"
  );
});

Given("que acessei a página de detalhes do usuário", () => {
  userDetailsPage.visit(user.id);
});

When("visualizo as informações do usuário", () => {
  cy.wait("@getUserById");
});

When("o usuário não for encontrado", () => {
  cy.wait("@userNotFound");
});

When("clico no botão 'Editar'", () => {
  userDetailsPage.clickEditButton();
});

When("clico no botão 'Cancelar'", () => {
  userDetailsPage.clickCancelButton();
});

When("os campos de nome e email estão liberados para edição", () => {
  userDetailsPage.getNameInput().should("be.enabled");
  userDetailsPage.getEmailInput().should("be.enabled");
});

When("digito um novo nome", () => {
  const name = faker.helpers.arrayElement(
    faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
  );

  userDetailsPage.clearName();
  userDetailsPage.typeName(name);
});

When("digito um novo email", () => {
  const email = faker.internet.email();

  userDetailsPage.clearEmail();
  userDetailsPage.typeEmail(email);
});

When("clico no botão 'Salvar'", () => {
  userDetailsPage.clickSaveButton();
});

When("digito um email já cadastrado", () => {
  cy.intercept("PUT", "/api/v1/users/*", mockErrorEmailAlreadyExists).as(
    "ErrorUpdateUser"
  );

  userDetailsPage.clearEmail();
  userDetailsPage.typeEmail("jey@gmail.com");
});

Then(
  "devo ver a mensagem informando que a informação foi atualizada com sucesso",
  () => {
    userDetailsPage
      .getModalSucess()
      .should("be.visible")
      .and("contain.text", "Informações atualizadas com sucesso!");
  }
);

Then("devo ver a mensagem informando que o usuário não foi encontrado", () => {
  cy.wait(1000);
  userDetailsPage
    .getModalAlert()
    .should("be.visible")
    .and("contain.text", "Usuário não encontrado")
    .and("contain.text", "Não foi possível localizar o usuário.");
});

Then("devo visualizar o ID, nome e email do usuário", () => {
  userDetailsPage.getIdInput().should("be.disabled");
  userDetailsPage.getIdInput().invoke("val").should("eq", user.id);

  userDetailsPage.getNameInput().should("be.disabled");
  userDetailsPage.getNameInput().invoke("val").should("eq", user.name);

  userDetailsPage.getEmailInput().should("be.disabled");
  userDetailsPage.getEmailInput().invoke("val").should("eq", user.email);
});

Then("devo ser redirecionado para a lista de usuários cadastrados", () => {
  cy.url().should("eq", userListPage.URL);
});

Then("devo ver a mensagem informando que o email já está em uso", () => {
  cy.wait("@ErrorUpdateUser");
  userDetailsPage
    .getModalAlert()
    .should("be.visible")
    .and("contain.text", "Este e-mail já é utilizado por outro usuário.");
});
