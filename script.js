let config = {
  "korisnicko-ime": {
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  "register-email": {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },
  "register-lozinka": {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "ponovi-lozinku",
  },
  "ponovi-lozinku": {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "register-lozinka",
  },
};

let validator = new Validator(config, "#register-form");

document.querySelector("#register-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (validator.validationPassed()) {
    let user = new User();
    user.username = document.querySelector("#korisnicko-ime-2").value;
    user.email = document.querySelector("#register-email").value;
    user.password = document.querySelector("#register-lozinka").value;
  } else {
    alert("Greška u validaciji");
  }
});
