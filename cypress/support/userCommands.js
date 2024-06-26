import { faker } from "@faker-js/faker";

Cypress.Commands.add("createSingleUser", () => {
  const infoUser = {
    name: faker.helpers.arrayElement(
      faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
    ),
    email: faker.internet.email(),
  };

  cy.request({
    method: "POST",
    url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
    body: infoUser,
  }).then((response) => {
    return response.body;
  });
});

Cypress.Commands.add("createMultipleUsers", (countUser = 0, users = []) => {
  const MINIMUM_USERS = 12;

  if (countUser === MINIMUM_USERS) {
    Cypress.env("CURRENT_USERS", users);
    return users;
  }

  const infoUser = {
    name: faker.helpers.arrayElement(
      faker.rawDefinitions.person.first_name.filter((a) => a.length >= 4)
    ),
    email: faker.internet.email(),
  };

  return cy
    .request({
      method: "POST",
      url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
      body: infoUser,
    })
    .then((response) => {
      users.push(response.body);
      return cy.createMultipleUsers((countUser += 1), users);
    });
});

Cypress.Commands.add("deleteUsers", () => {
  const users = Cypress.env("CURRENT_USERS");

  if (!users || users.length === 0) {
    return;
  }

  users.forEach((user) => {
    cy.request({
      method: "DELETE",
      url: `https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/${user.id}`,
    });
  });

  Cypress.env("CURRENT_USERS", []);
});
