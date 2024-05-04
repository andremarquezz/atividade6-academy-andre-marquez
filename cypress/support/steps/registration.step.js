import { faker } from "@faker-js/faker";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { mockErrorUserAlreadyExists } from "../../fixtures/mocksErrors";
import { ListPage } from "../pages/ListPage";
import { RegistrationPage } from "../pages/RegistrationPage";

const registrationPage = new RegistrationPage();
const listPage = new ListPage();

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

When("preencher o campo nome com um nome válido", () => {
  const name = faker.helpers.arrayElement(
    faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
  );
  registrationPage.typeName(name);
});

When("não preencher o campo nome", () => {});

When("não preencher o campo email", () => {});

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

When("preencher o campo email com um email com mais de 60 caracteres", () => {
  const email = `${faker.lorem.words(46)}@gmail.com`;
  registrationPage.typeEmail(email);
});

When("preencher o campo email com um email já cadastrado", () => {
  cy.intercept("POST", "/api/v1/users", mockErrorUserAlreadyExists).as(
    "UserAlreadyExists"
  );
  const email = "jey@gmail.com";
  registrationPage.typeEmail(email);
});

When("clicar no botão de Salvar", () => {
  cy.intercept("POST", "/api/v1/users").as("createUser");
  registrationPage.clickSubmitButton();
});

When("clicar no botão de Voltar", () => {
  registrationPage.clickBackButton();
});

When("clicar no icone da Raro", () => {
  registrationPage.clickRaroIcon();
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

Then("devo ver a mensagem de erro indicando que o email é obrigatório", () => {
  registrationPage
    .getErrorFeedbackMessageName()
    .should("be.visible")
    .and("contain.text", "O campo e-mail é obrigatório.");
});

Then("devo ver a mensagem de erro indicando que o email é inválido", () => {
  registrationPage
    .getErrorFeedbackMessageEmail()
    .should("be.visible")
    .and("contain.text", "Formato de e-mail inválido");
});

Then(
  "devo ver a mensagem de erro indicando que o email deve ter no máximo 60 caracteres",
  () => {
    registrationPage
      .getErrorFeedbackMessageEmail()
      .should("be.visible")
      .and("contain.text", "Informe no máximo 60 caracteres para o e-mail");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o email já está cadastrado",
  () => {
    cy.wait("@UserAlreadyExists");
    registrationPage
      .getErrorModal()
      .should("be.visible")
      .and("contain.text", "Este e-mail já é utilizado por outro usuário.");
  }
);

Then("devo ver a página de listagem de usuários", () => {
  cy.url().should("eq", listPage.URL);
});
