export class UserDetailsPage {
  idInput = "[name=id]";
  nameInput = "#userName";
  emailInput = "#userEmail";
  editButton = '[type="button"] > .sc-dAlyuH';
  saveButton = '[type="submit"] > .sc-dAlyuH';
  cancelButton = ".sc-lcIPJg";
  modalAlert = ".sc-dCFHLb";
  modalSucess = ".go3958317564";

  URL = "https://rarocrud-frontend-88984f6e4454.herokuapp.com/users";

  visit(userId) {
    const userDetailsURL = `${this.URL}/${userId}`;
    cy.visit(userDetailsURL);
  }
  getIdInput() {
    return cy.get(this.idInput);
  }

  getNameInput() {
    return cy.get(this.nameInput);
  }

  getEmailInput() {
    return cy.get(this.emailInput);
  }

  getModalAlert() {
    return cy.get(this.modalAlert);
  }

  getModalSucess() {
    return cy.get(this.modalSucess);
  }

  typeName(name) {
    return cy.get(this.nameInput).type(name);
  }

  clearName() {
    return cy.get(this.nameInput).clear();
  }

  typeEmail(email) {
    return cy.get(this.emailInput).type(email);
  }

  clearEmail() {
    return cy.get(this.emailInput).clear();
  }

  clickEditButton() {
    return cy.get(this.editButton).click();
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
  }

  clickCancelButton() {
    cy.get(this.cancelButton).click();
  }

  edit(name, email) {
    if (name) {
      this.typeName(name);
    }
    if (email) {
      this.typeEmail(email);
    }
    this.clickSaveButton();
  }
}
