import { Injectable } from '@angular/core';

export interface IAuthRoute {
    route: string;
    query_params?: {[key: string]: string};
}

@Injectable()
export class AuthMethodsConfig {
    public afterOAuthLoginMethod: (data: {[key: string]: any}) => any;
    public afterOAuthRefreshMethod: (data: {[key: string]: any}) => any;
    public registerUser: (data: {[key: string]: any}) => any;
}

export class AuthConfig {
    public api: {
        login_url: IAuthRoute;
        forgot_password_url: IAuthRoute;
        reset_password_url: IAuthRoute;
    };
    public routes: {
        login: IAuthRoute;
        sign_up: IAuthRoute;
        forgot_password: IAuthRoute;
        forgot_password_redirection: IAuthRoute;
        reset_password: IAuthRoute;
    };
    public main_image_url: string;
    public need_conditions ? = false;
}
