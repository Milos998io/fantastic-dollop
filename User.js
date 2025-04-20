class User {
  user_id = "";
  username = "";
  email = "";
  password = "";
  api_url = "https://x8ki-letl-twmt.n7.xano.io/api:EAYt7oEE/user";

  create() {
    let data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    console.log(data);
  }
}
