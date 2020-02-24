export class AuthService {
    loggedIn = false;
    redirectUrl: string;

    isAuthenticated() {
        const promise = new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 700);
        })

        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}