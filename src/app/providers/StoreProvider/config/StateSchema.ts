import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user: IUserSchema;
    loginForm: ILoginSchema;
}
