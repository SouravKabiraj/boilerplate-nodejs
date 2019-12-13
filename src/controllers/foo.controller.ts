import {Request, Response} from 'express';
import {HttpStatusCode} from "../models/httpStatus.model";
import {controller, httpGet, request, response} from "inversify-express-utils";

@controller('/foo')
export class FooController {
    public healthCheck(@request() request: Request, @response() response: Response): void {
        response.status(HttpStatusCode.Ok).send({health: 'ok'});
    }
}
