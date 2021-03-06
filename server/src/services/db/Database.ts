import { Pool } from 'pg';
import { DB_PORT } from '../../models/appConfig'

export class Database {
    private static instance: Database;

    private _db: Pool;

    private constructor() {
        this._db = new Pool({
            user: 'postgres',
            host: 'postgres',
            database: 'postgres',
            password: 'password',
            port: DB_PORT
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public PostgreQuery(req: string) {
        return new Promise<Array<any>>((resolve, reject) => {
            this._db.query(req, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            });
        });
    }
}
