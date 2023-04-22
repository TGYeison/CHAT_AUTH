import { Pool } from 'pg';

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1q2w3e$R',
    database: 'chatauth',
    port: 5432
});