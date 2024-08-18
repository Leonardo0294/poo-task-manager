import User from '../models/user.model.js';

class UserService {
  static async createUser(data) {
    try {
      const user = new User(data);
      return await user.save();
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }

  static async getUserById(userId) {
    try {
      return await User.findById(userId).exec();
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }

  static async getAllUsers() {
    try {
      return await User.find().exec();
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message);
    }
  }

  static async updateUser(userId, data) {
    try {
      return await User.findByIdAndUpdate(userId, data, { new: true }).exec();
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }

  static async deleteUser(userId) {
    try {
      return await User.findByIdAndDelete(userId).exec();
    } catch (error) {
      throw new Error('Error deleting user: ' + error.message);
    }
  }
}

export default UserService;
