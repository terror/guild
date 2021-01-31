import { Sequelize } from 'Sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const db: Sequelize = new Sequelize(process.env.CONN_URI!);
