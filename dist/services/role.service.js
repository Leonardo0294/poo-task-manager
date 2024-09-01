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
const role_model_1 = __importDefault(require("../models/role.model"));
class RoleService {
    static createRole(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const role = new role_model_1.default(data);
                return yield role.save();
            }
            catch (error) {
                throw new Error('Error creating role: ' + error.message);
            }
        });
    }
    static getRoleById(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield role_model_1.default.findById(roleId).exec();
            }
            catch (error) {
                throw new Error('Error fetching role: ' + error.message);
            }
        });
    }
    static getAllRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield role_model_1.default.find().exec();
            }
            catch (error) {
                throw new Error('Error fetching roles: ' + error.message);
            }
        });
    }
    static updateRole(roleId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield role_model_1.default.findByIdAndUpdate(roleId, data, { new: true }).exec();
            }
            catch (error) {
                throw new Error('Error updating role: ' + error.message);
            }
        });
    }
    static deleteRole(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield role_model_1.default.findByIdAndDelete(roleId).exec();
            }
            catch (error) {
                throw new Error('Error deleting role: ' + error.message);
            }
        });
    }
}
exports.default = RoleService;
//# sourceMappingURL=role.service.js.map