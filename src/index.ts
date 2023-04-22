import express from 'express';

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(3500);
console.log('init server listening');
