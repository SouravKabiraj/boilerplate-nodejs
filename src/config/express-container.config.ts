import {Container} from "inversify";
import {AuthenticationService} from "../middleware/authentication/authentication.service";
import {AuthenticationMiddleware} from "../middleware/authentication/authentication.middleware";

// ADD ALL CONTROLLER
import "../controllers/foo.controller";
import '../middleware/authentication/authentication.middleware';

export const container = new Container({autoBindInjectable: true});

// ADD ALL Middleware
container.bind<AuthenticationMiddleware>('AuthenticationMiddleware').to(AuthenticationMiddleware);

// ADD ALL SERVICE
container.bind<AuthenticationService>('AuthenticationService').to(AuthenticationService);

// ADD ALL REPOSITORY
// container.bind<ContactRepository>('ContactRepository').to(ContactRepository);
