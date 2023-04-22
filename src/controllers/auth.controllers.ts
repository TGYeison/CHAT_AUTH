import { pool } from "../database";

import jwt from 'jsonwebtoken';

import { secret } from "../config";


export const SingUp = async(req:any, res:any) => {
    const { name, username, password} = req.body;

    await pool.query(
        'INSERT INTO users (name, username, password, role) values ($1, $2, $3, $4) RETURNING *', 
        [name, username, password, 1],
        (errors, results) => {
            if (errors) {
                throw errors;
            }

            const userStrng = JSON.stringify(results.rows);
            const newUser = JSON.parse(userStrng)[0];

            const token = jwt.sign({id: newUser.id}, secret, {
                expiresIn: 60 * 60 * 24
            })

            res.status(201).json({auth: true, token});
        }
    );
}

export const SingIn = async(req:any, res:any) => {
    const { username, password } = req.body;

    await pool.query(
        'SELECT * FROM users WHERE username = $1', 
        [ username ],
        (error, results) => {
            if (error) {
                res.status(401);
            }

            const decodeJson = JSON.stringify(results.rows);
            const user = JSON.parse(decodeJson);
            if(user.lenght === 0) {
                res.status(404).json({
                    auth: false,
                    message: 'user not found'
                });
            }

            if(password !== user[0].password) {
                res.status(401).json({
                   auth: false,
                   message: 'Password is incorrect' 
                });
            }

            const token = jwt.sign({id: user[0].id}, secret, {
                expiresIn: 60 * 60 * 24
            });

            res.status(200).json({auth: true, token});
        }
    )

}

export const AuthVerify = async(req:any, res:any) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        });
    } 

    const decode:any = jwt.verify(token, secret);

    await pool.query(
        'SELECT * FROM users WHERE id = $1', 
        [decode.id], 
        (error, results) => {
            if (error) {
                throw error
            }

            res.status(200).json(results.rows);
        }
    )
}