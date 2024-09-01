import { IRole } from '../models/role.model';
declare class RoleService {
    static createRole(data: Partial<IRole>): Promise<IRole>;
    static getRoleById(roleId: string): Promise<IRole | null>;
    static getAllRoles(): Promise<IRole[]>;
    static updateRole(roleId: string, data: Partial<IRole>): Promise<IRole | null>;
    static deleteRole(roleId: string): Promise<IRole | null>;
}
export default RoleService;
