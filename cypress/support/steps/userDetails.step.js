import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { UserDetailsPage } from "../pages/UserDetailsPage";
import { UserListPage } from "../pages/UserListPage";

const userDetailsPage = new UserDetailsPage();
const userListPage = new UserListPage();
let user;

Before(() => {
  cy.viewport("macbook-16");
  cy.intercept("GET", "/api/v1/users/*").as("getUserById");
});

Before({ tags: "@createUserDetails" }, () => {
  cy.createUser().then((randomUser) => {
    user = randomUser;
  });
});

Given("que acessei a página de detalhes do usuário", () => {
  userDetailsPage.visit(user.id);
});

Given("que acessei a página de detalhes do usuário que não existe", () => {
  const fakeId = "ca8efbac-3269-4d28-8e89-4cd5345";

  userDetailsPage.visit(fakeId);
});

When("visualizo as informações do usuário", () => {
  cy.wait("@getUserById");
});

When("o usuário não for encontrado", () => {
  cy.wait("@getUserById");
});

When("clico no botão de editar", () => {
  userDetailsPage.clickEditButton();
});

When("clico no botão de cancelar", () => {
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

When("clico no botão de salvar", () => {
  userDetailsPage.clickSaveButton();
});

Then("vejo a mensagem que a informação foi atualizada com sucesso", () => {
  userDetailsPage
    .getModalSucess()
    .should("be.visible")
    .and("contain.text", "Informações atualizadas com sucesso!");
});

Then("vejo a mensagem que o usuário não foi encontrado", () => {
  userDetailsPage
    .getModalAlert()
    .should("be.visible")
    .and("contain.text", "Usuário não encontrado")
    .and("contain.text", "Não foi possível localizar o usuário.");
});

Then("devo visualizar o ID do usuário", () => {
  userDetailsPage.getIdInput().should("be.disabled");
  userDetailsPage.getIdInput().invoke("val").should("eq", user.id);
});

Then("devo visualizar o nome do usuário", () => {
  userDetailsPage.getNameInput().should("be.disabled");
  userDetailsPage.getNameInput().invoke("val").should("eq", user.name);
});

Then("sou redirecionado para a lista de usuários cadastrados", () => {
  cy.url().should("eq", userListPage.URL);
});

Then("devo visualizar o email do usuário", () => {
  userDetailsPage.getEmailInput().should("be.disabled");
  userDetailsPage.getEmailInput().invoke("val").should("eq", user.email);
});
