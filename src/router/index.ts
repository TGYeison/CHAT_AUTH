import { Router } from "express";

import { LogIn, SingIn, AuthVerify } from "../controllers/auth.controllers";


const routes = Router();

routes.post('/auth/login', LogIn);
routes.post('/auth/singin', SingIn);
routes.post('/auth/verify', AuthVerify);


export default routes;