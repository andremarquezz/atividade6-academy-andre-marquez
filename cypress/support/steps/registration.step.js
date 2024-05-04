import { faker } from "@faker-js/faker";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { RegistrationPage } from "../pages/RegistrationPage";

const registrationPage = new RegistrationPage();

Given("que eu estou na página de cadastro", () => {
  registrationPage.visit();
});

When("eu preencher os campos nome e email", () => {
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

Then("eu devo ver a mensagem de sucesso", () => {
  cy.wait("@createUser");
  registrationPage
    .getSuccessMessage()
    .should("exist")
    .and("contain.text", "Usuário salvo com sucesso!");
});

/* 
Utilizar no caso de falha de teste
When("eu preencher os campos nome e email", (table) => {
  table.hashes().nome.forEach((nome) => {
    cy.get('input[name="name"]').type(nome);
  });
  table.hashes().email.forEach((email) => {
    cy.get('input[name="email"]').type(email);
  });
}); */
