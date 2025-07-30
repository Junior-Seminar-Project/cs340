// add header

export default class User {
  username;
  password;
  first_name;
  last_name;
  email;
  id;

  constructor(username, password, first_name, last_name, email, id) {
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.id = id;
  }
}
