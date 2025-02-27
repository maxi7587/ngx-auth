/***
 * Copyright (C) 1997-2017 Reyesoft <info@reyesoft.com>
 *
 * This file is part of Multinexo. Multinexo can not be copied and/or
 * distributed without the express permission of Reyesoft
 */

import { Injectable, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthConfig, AuthMethodsConfig } from '../../auth-config';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class GuestStartService {
    public constructor(
        private authMethodsConfig: AuthMethodsConfig,
        private oAuthService: OAuthService,
        @Inject('authConfig') public authConfig: AuthConfig
    ) {}

    public oAuthLogin(user): void {
        if (!this.authMethodsConfig.afterOAuthLoginMethod) {
            throw(new Error('You must provide a login redirection method when importign AuthModule in your application'));
        }

        // Sending data and password for the token...
        this.oAuthService.fetchTokenUsingPasswordFlow(user.email, user.password)
            .then(
                (data: {[key: string]: any}) => {
                    this.authMethodsConfig.afterOAuthLoginMethod(data);
                }
            );
    }

    public register(form: FormGroup) {
        console.log('will register user ---->', form);
        this.authMethodsConfig.registerUser(form.value);
    }
}
