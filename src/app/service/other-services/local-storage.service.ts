import { Injectable } from '@angular/core';

import { UserModel } from '@app/models';

@Injectable()
export class LocalStorageService
{
    static get(key: string): any | null
    {
        const data = localStorage.getItem(key);

        if (!data || data === 'undefined')
        {
            return null;
        }
        return JSON.parse(data);
    }

    static set(key: string, data: any)
    {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static remove(key: string)
    {
        localStorage.removeItem(key);
    }

    static getToken(): string
    {
        return this.get('token');
    }

    static getRestFlag(): boolean
    {
        return this.get('no_reset');
    }

    static setRestFlag(rstflg: boolean)
    {
        this.set('no_reset', rstflg);
    }

    static setToken(token: string)
    {
        this.set('token', token);
    }

    static set_front_reset(num: boolean)
    {
        this.set('fr_reset', num);
    }

    static get_front_reset(): boolean
    {
        return this.get('fr_reset');
    }

    static getUser()
    {
        return this.get("account");
    }

    static setUser(user)
    {
        this.set('account', user);
    }

    static login(data: { token: string, user: UserModel, no_reset: boolean })
    {
        this.setUser(data.user);
        this.setToken(data.token);
        this.setRestFlag(data.no_reset);
    }

    static logout()
    {
        this.remove('account');
        this.remove('token');
        this.remove('no_reset');
    }

    static clear()
    {
        localStorage.clear();
    }
}
