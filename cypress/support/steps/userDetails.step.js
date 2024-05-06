import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { UserDetailsPage } from "../pages/UserDetailsPage";

const userDetailsPage = new UserDetailsPage();
let user;

Before({ tags: "@userDetails" }, () => {
  cy.viewport("macbook-16");
});

Given("que estou na página de detalhes do usuário", () => {
  cy.createUser()
    .then((randomUser) => {
      cy.log(randomUser);
      user = randomUser;
    })
    .as("createUser");

  cy.wait("@createUser");

  userDetailsPage.visit(user.id);
});

When("visualizo as informações do usuário", () => {
  cy.intercept("GET", "/api/v1/users/*").as("getUserById");
  cy.wait("@getUserById");
});

Then("devo visualizar o ID do usuário", () => {
  userDetailsPage.getIdInput().should("be.disabled");
  userDetailsPage.getIdInput().invoke("val").should("eq", user.id);
});

Then("devo visualizar o nome do usuário", () => {
  userDetailsPage.getNameInput().should("be.disabled");
  userDetailsPage.getNameInput().invoke("val").should("eq", user.name);
});

Then("devo visualizar o email do usuário", () => {
  userDetailsPage.getEmailInput().should("be.disabled");
  userDetailsPage.getEmailInput().invoke("val").should("eq", user.email);
});
