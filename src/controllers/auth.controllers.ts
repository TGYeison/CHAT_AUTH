import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1q2w3e$R',
    database: 'chatauth',
    port: 5432
});


export const SingIn = async(req:any, res:any) => {
    const response = await pool.query('SELECT * FROM users WHERE role = 1');

    res.status(200).json(response.rows)
}

export const LogIn = (req:any, res:any) => {

}

export const AuthVerify = (req:any, res:any) => {

}