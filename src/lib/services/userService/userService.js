const bcrypt = require("bcrypt");
const StatusError = require("../../utils/statusError");

const SALT_ROUNDS = 10;

class UserService {
  constructor(UserModel) {
    this.UserModel = UserModel;
    this.getUser = this.getUser.bind(this);
    this.getUserByUserName = this.getUserByUserName.bind(this);
    this.createUser = this.createUser.bind(this);
    this.register = this.register.bind(this);
  }

  getUser(id) {
    return this.UserModel.findById(id);
  }

  getUserByUserName(userName) {
    return this.UserModel.findOne({ userName });
  }

  createUser(userName, hashedPassword) {
    return new this.UserModel({ userName, password: hashedPassword }).save();
  }

  async register(userName, password) {
    const user = await this.getUserByUserName(userName);

    if (user) {
      throw new StatusError("This user name is already taken.", 400);
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return this.createUser(userName, hashedPassword);
  }
}

module.exports = UserService;
