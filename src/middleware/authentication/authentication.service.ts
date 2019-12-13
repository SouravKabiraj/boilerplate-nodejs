// import {sign, verify} from "jsonwebtoken";
// import {RsaConfig} from "../../config/rsa.config";
import {injectable} from "inversify";

@injectable()
export class AuthenticationService {
    public getTokenFor(user: any): string {
        return;
    }

    public getUser(token: string): any {
        return;
    }
}
