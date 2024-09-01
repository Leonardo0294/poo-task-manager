import { IUser } from '../models/user.model';
declare class UserService {
    static createUser(data: Partial<IUser>): Promise<IUser>;
    static getUserById(userId: string): Promise<IUser | null>;
    static getAllUsers(): Promise<IUser[]>;
    static updateUser(userId: string, data: Partial<IUser>): Promise<IUser | null>;
    static deleteUser(userId: string): Promise<IUser | null>;
}
export default UserService;
