let config = {
  korisnicko_ime: {
    required: true,
    minlength: 5,
    maxlength: 50,
  },

  email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },

  lozinka: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "ponovi_lozinku",
  },

  ponovi_lozinku: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "lozinka",
  },
};

let validator = new validator(config, "#regsiter-form");

document.querySelector("#regsiter-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (validator.validationPassed()) {
    alert("Sve je ok");
  } else {
    alert("Greška u validaciji");
  }
});
