import mongoose, { Document } from 'mongoose';
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & Required<{
    _id: unknown;
}>, any>;
export default User;
