export default class User {
  constructor(userName, userId) {
    this.userName = userName;
    this.userId = userId;
  }

  get userName() {
    return this.userName;
  }

  get userId() {
    return this.userId;
  }
}
