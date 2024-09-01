"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    static createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new user_model_1.default(data);
                return yield user.save();
            }
            catch (error) {
                throw new Error('Error creating user: ' + error.message);
            }
        });
    }
    static getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_model_1.default.findById(userId).exec();
            }
            catch (error) {
                throw new Error('Error fetching user: ' + error.message);
            }
        });
    }
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_model_1.default.find().exec();
            }
            catch (error) {
                throw new Error('Error fetching users: ' + error.message);
            }
        });
    }
    static updateUser(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_model_1.default.findByIdAndUpdate(userId, data, { new: true }).exec();
            }
            catch (error) {
                throw new Error('Error updating user: ' + error.message);
            }
        });
    }
    static deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_model_1.default.findByIdAndDelete(userId).exec();
            }
            catch (error) {
                throw new Error('Error deleting user: ' + error.message);
            }
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map