export class User {
    id: number;
    username: string;
    password?: string;
    sessionLifetime?: number;
    token: string;
    isLoggedIn: boolean;
}

export class PersistedUser {
    id?: number;
    username: string;
    passwordHash: string;
    passwordSalt: string;
    sessionLifetime?: number;
    token?: string;
    tokenExpiration?: number;
}

export function isTokenExpired(user: PersistedUser): boolean {
    // if the user or token is null it's considered expired
    if (!user.token || user.token === "") { return true; }

    // if there is no expiration set the, with the presence of a token, the user
    // is configured for indefinite session length
    if (!user.tokenExpiration) { return false; }

    // otherwise the tokens is expired if it's expiration date is less than the current date
    return user.tokenExpiration < Date.now();
}

export function toUser(user: PersistedUser, includeToken?: boolean): User {
    return  {
        id: user.id,
        username: user.username,
        sessionLifetime: user.sessionLifetime,
        token: includeToken ? user.token : null,
        isLoggedIn: !isTokenExpired(user)
    };
}
