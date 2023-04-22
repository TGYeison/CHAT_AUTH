import { Router } from "express";

import { LogIn, SingIn } from "../controllers/auth.controllers";


const routes = Router();

routes.post('/auth/login', LogIn);
routes.post('/auth/singin', SingIn);


export default routes;