$(document).ready(() => {
  const services = new Services();
  $(".form-page").hide();
  var contacts = [];
  function clearForm() {
    $("#name").val("");
    $("#email").val("");
    $("#mob").val("");
    $("#tel").val("");
    $("#website").val("");
    $("#address").val("");
  }

  function hideForm() {
    $(".form-page").hide();
    $(".center-info").hide();
    $(".show-info").hide();
  }

  function showForm() {
    $(".center-info").hide();
    $(".show-info").hide();
    $(".form-page").show();
  }

  function showInfo() {
    $(".form-page").hide();
    $(".show-info").show();
    $(".center-info").show();
  }

  function resetForm() {
    document.getElementById("form-data").reset();
    var errorMessages = document.getElementsByClassName("error");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].textContent = "";
    }
  }

  $(".btn-cancel").click(() => {
    $(".form-page").hide();
    resetForm();
  });

  function renderContacts() {
    for (var i = 0; i < contacts.length; i++) {
      var contactHtml =
        "<ul><li><h2>" +
        contacts[i].name +
        "</h2></li><li>" +
        contacts[i].email +
        "</li><li>" +
        contacts[i].mobile +
        "</li></ul>";
      $(".contact-info .contact-list div").append(contactHtml);
    }
  }

  var contacts = services.getContacts();
  renderContacts();

  $("#add").click(function () {
    $(".btn-update").hide();
    $(".btn").show();
    showForm();
  });
  $(".btn-update").show();

  $("#form-data").submit(function (e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mob").val();
    var landline = $("#tel").val();
    var website = $("#website").val();
    var address = $("#address").val();
    var contact = {
      name: name,
      email: email,
      mobile: mobile,
      landline: landline,
      website: website,
      address: address,
    };

    services.addContact(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    var contactHtml =
      "<ul><li><h2>" +
      name +
      "</h2></li><li>" +
      email +
      "</li><li>" +
      mobile +
      "</li></ul>";
    $(".contact-info .contact-list div").append(contactHtml);
    $(".form-page").hide();

    clearForm();
  });

  $(".show-info").hide();
  $("body").on("click", ".contact-list-data ul li", function () {
    selectedIndex = $(this).parent().index();
    showInfo();
    let index = $(this).parent().index();
    let contact = contacts[index];
    let str1 = ` <ul class="view-info" >
            <li><h2>${contact.name}</h2></li>
            <li>Email: ${contact.email}</li>
            <li>Mobile: ${contact.mobile}</li>
            <li>Landline: ${contact.landline}</li>
            <li>Website: ${contact.website}</li>
            <li>Address: ${contact.address}</li></li>
          </ul>`;
    $(".center-info").html(str1);
  });

  function updateContactList() {
    $(".contact-info .contact-list div").empty();
    renderContacts();
  }

  $();

  $("#edit").click(function () {
    $(".btn").hide();
    if (selectedIndex >= 0 && selectedIndex < contacts.length) {
      var contact = contacts[selectedIndex];

      $("#name").val(contact.name);
      $("#email").val(contact.email);
      $("#mob").val(contact.mobile);
      $("#tel").val(contact.landline);
      $("#website").val(contact.website);
      $("#address").val(contact.address);

      $(".form-page .btn-update").click(function (e) {
        e.preventDefault();

        contacts[selectedIndex].name = $("#name").val();
        contacts[selectedIndex].email = $("#email").val();
        contacts[selectedIndex].mobile = $("#mob").val();
        contacts[selectedIndex].landline = $("#tel").val();
        contacts[selectedIndex].website = $("#website").val();
        contacts[selectedIndex].address = $("#address").val();

        services.updateContact(selectedIndex, contacts[selectedIndex]);

        $(".form-page").hide();
        updateContactList();

        clearForm();

        selectedIndex = -1;
      });

      showForm();
    }
    $(".btn-update").show();
  });
  $("#delete").click(function () {
    if (confirm("are you sure you want to delete contact?")) {
      if (selectedIndex >= 0 && selectedIndex < contacts.length) {
        services.deleteContact(selectedIndex);

        updateContactList();

        selectedIndex = -1;

        clearForm();
        hideForm();
      }
    }
  });
});
