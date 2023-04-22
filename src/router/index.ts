import { Router } from "express";

import { SingIn, SingUp, AuthVerify } from "../controllers/auth.controllers";


const routes = Router();

routes.post('/auth/singin', SingIn);
routes.post('/auth/singup', SingUp);
routes.get('/auth/verify', AuthVerify);


export default routes;