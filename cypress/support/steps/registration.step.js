import { faker } from "@faker-js/faker";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { RegistrationPage } from "../pages/RegistrationPage";

const registrationPage = new RegistrationPage();

Given("que estou na página de cadastro", () => {
  registrationPage.visit();
});

When("preencher o campo nome {string}", (name) => {
  registrationPage.typeName(name);
});

When("preencher o campo email {string}", (email) => {
  registrationPage.typeEmail(email);
});

When("preencher o campo email com um email válido", () => {
  const email = faker.internet.email();
  registrationPage.typeEmail(email);
});

When("não preencher o campo nome", () => {});

When("preencher o campo nome com mais de 100 caracteres", () => {
  const name = faker.lorem.words(101);
  registrationPage.typeName(name);
});

When("preencher os campos nome e email", () => {
  const name = faker.helpers.arrayElement(
    faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
  );
  const email = faker.internet.email();

  registrationPage.typeName(name);
  registrationPage.typeEmail(email);
});

When("clicar no botão de Salvar", () => {
  cy.intercept("POST", "/api/v1/users").as("createUser");
  registrationPage.clickSubmitButton();
});

Then("devo ver a mensagem de sucesso", () => {
  cy.wait("@createUser");
  registrationPage
    .getSuccessMessage()
    .should("exist")
    .and("contain.text", "Usuário salvo com sucesso!");
});

Then("devo ver a mensagem de erro indicando que o nome é obrigatório", () => {
  registrationPage
    .getErrorFeedbackMessageName()
    .should("be.visible")
    .and("contain.text", "O campo nome é obrigatório.");
});

Then(
  "devo ver a mensagem de erro indicando que o formato do nome é inválido",
  () => {
    registrationPage
      .getErrorFeedbackMessageName()
      .should("be.visible")
      .and("contain.text", "Formato do nome é inválido.");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o nome deve ter pelo menos 4 letras",
  () => {
    registrationPage
      .getErrorFeedbackMessageName()
      .should("be.visible")
      .and("contain.text", "Informe pelo menos 4 letras para o nome.");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o nome deve ter no máximo 100 caracteres",
  () => {
    registrationPage
      .getErrorFeedbackMessageName()
      .should("be.visible")
      .and("contain.text", "Informe no máximo 100 caracteres para o nome");
  }
);
