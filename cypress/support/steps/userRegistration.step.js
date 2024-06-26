import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { mockErrorUserAlreadyExists } from "../../fixtures/mocksErrors";
import { UserListPage } from "../pages/UserListPage";
import { UserRegistrationPage } from "../pages/UserRegistrationPage";

const userRegistrationPage = new UserRegistrationPage();
const userListPage = new UserListPage();

Before(() => {
  cy.viewport("macbook-16");
});

Given("que acessei a página de cadastro", () => {
  userRegistrationPage.visit();
});

When("preencher um nome com menos de 4 caracteres", () => {
  const name = "Jey";
  userRegistrationPage.typeName(name);
});

When("preencher um nome com números", () => {
  const name = "Jey342";
  userRegistrationPage.typeName(name);
});

When("preencher um email inválido {string}", (email) => {
  userRegistrationPage.typeEmail(email);
});

When("preencher um email válido", () => {
  const email = faker.internet.email();
  userRegistrationPage.typeEmail(email);
});

When("preencher um nome válido", () => {
  const name = faker.helpers.arrayElement(
    faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
  );
  userRegistrationPage.typeName(name);
});

When("não preencher o nome", () => {});

When("não preencher o email", () => {});

When("preencher um nome com mais de 100 caracteres", () => {
  const name = faker.lorem.words(101);
  userRegistrationPage.typeName(name);
});

When("preencher um nome válido e um email válido", () => {
  const name = faker.helpers.arrayElement(
    faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
  );
  const email = faker.internet.email();

  userRegistrationPage.typeName(name);
  userRegistrationPage.typeEmail(email);
});

When("preencher um email com mais de 60 caracteres", () => {
  const email = `${faker.lorem.words(46)}@gmail.com`;
  userRegistrationPage.typeEmail(email);
});

When("preencher um email já cadastrado", () => {
  cy.intercept("POST", "/api/v1/users", mockErrorUserAlreadyExists).as(
    "UserAlreadyExists"
  );
  const email = "jey@gmail.com";
  userRegistrationPage.typeEmail(email);
});

When("clicar no botão de Salvar", () => {
  cy.intercept("POST", "/api/v1/users").as("createUser");
  userRegistrationPage.clickSubmitButton();
});

When("clicar no botão de Voltar", () => {
  userRegistrationPage.clickBackButton();
});

When("clicar no ícone da Raro", () => {
  userRegistrationPage.clickRaroIcon();
});

When("preencher um email com menos de 4 caracteres", () => {
  userRegistrationPage.typeEmail("@j");
});

Then("devo ver a mensagem de sucesso", () => {
  cy.wait("@createUser");
  userRegistrationPage
    .getSuccessMessage()
    .should("exist")
    .and("contain.text", "Usuário salvo com sucesso!");
});

Then("devo ver a mensagem de erro indicando que o nome é obrigatório", () => {
  userRegistrationPage
    .getErrorFeedbackMessageName()
    .should("be.visible")
    .and("contain.text", "O campo nome é obrigatório.");
});

Then(
  "devo ver a mensagem de erro indicando que o email deve ter pelo menos 4 caracteres",
  () => {
    userRegistrationPage
      .getErrorFeedbackMessageEmail()
      .should("be.visible")
      .and("contain.text", "Informe pelo menos 4 caracteres para o e-mail.");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o formato do nome é inválido",
  () => {
    userRegistrationPage
      .getErrorFeedbackMessageName()
      .should("be.visible")
      .and("contain.text", "Formato do nome é inválido.");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o nome deve ter pelo menos 4 letras",
  () => {
    userRegistrationPage
      .getErrorFeedbackMessageName()
      .should("be.visible")
      .and("contain.text", "Informe pelo menos 4 letras para o nome.");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o nome deve ter no máximo 100 caracteres",
  () => {
    userRegistrationPage
      .getErrorFeedbackMessageName()
      .should("be.visible")
      .and("contain.text", "Informe no máximo 100 caracteres para o nome");
  }
);

Then("devo ver a mensagem de erro indicando que o email é obrigatório", () => {
  userRegistrationPage
    .getErrorFeedbackMessageName()
    .should("be.visible")
    .and("contain.text", "O campo e-mail é obrigatório.");
});

Then("devo ver a mensagem de erro indicando que o email é inválido", () => {
  userRegistrationPage
    .getErrorFeedbackMessageEmail()
    .should("be.visible")
    .and("contain.text", "Formato de e-mail inválido");
});

Then(
  "devo ver a mensagem de erro indicando que o email deve ter no máximo 60 caracteres",
  () => {
    userRegistrationPage
      .getErrorFeedbackMessageEmail()
      .should("be.visible")
      .and("contain.text", "Informe no máximo 60 caracteres para o e-mail");
  }
);

Then(
  "devo ver a mensagem de erro indicando que o email já está cadastrado",
  () => {
    cy.wait("@UserAlreadyExists");
    userRegistrationPage
      .getErrorModal()
      .should("be.visible")
      .and("contain.text", "Este e-mail já é utilizado por outro usuário.");
  }
);

Then("devo ver a página de listagem de usuários", () => {
  cy.url().should("eq", userListPage.URL);
});
