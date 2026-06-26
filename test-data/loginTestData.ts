import { USERS } from '../constants/users';

export const negativeScenarios = [
    {
        name: 'locked user',
        user: USERS.LOCKED,
        error: 'Epic sadface: Sorry, this user has been locked out.'
    },
    {
        name: 'empty credentials',
        user: USERS.EMPTY_CREDS,
        error: 'Epic sadface: Username is required'
    },
    {
        name: 'empty username',
        user: USERS.EMPTY_USERNAME,
        error: 'Epic sadface: Username is required'
    },
    {
        name: 'empty password',
        user: USERS.EMPTY_PASSWORD,
        error: 'Epic sadface: Password is required'
    },
    {
        name: 'invalid username',
        user: USERS.INVALID_USERNAME,
        error: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
        name: 'invalid password',
        user: USERS.INVALID_PASSWORD,
        error: 'Epic sadface: Username and password do not match any user in this service'
    }
];