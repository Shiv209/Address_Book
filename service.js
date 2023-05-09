class Services {
  constructor() {
    this.contacts = [];

    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
  }

  addContact(contact) {
    this.contacts.push(contact);
    this.updateLocalStorage();
  }
  updateContact(index, contact) {
    this.contacts[index] = contact;
    this.updateLocalStorage();
  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
    this.updateLocalStorage();
  }

  getContacts() {
    return this.contacts;
  }
  updateLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }
}
