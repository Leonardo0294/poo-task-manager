import mongoose from 'mongoose';
declare const Role: mongoose.Model<{
    name: string;
    description: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
}> & {
    name: string;
    description: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    description: string;
}>> & mongoose.FlatRecord<{
    name: string;
    description: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Role;
