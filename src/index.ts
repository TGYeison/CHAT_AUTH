import express from 'express';


import routes from './router/index';

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use(routes);


app.listen(3500);
console.log('init server listening');
