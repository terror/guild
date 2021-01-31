import { DataTypes } from 'Sequelize';
import { db } from '../config';

export const User = db.define('User', {
    name: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    avatar: { type: DataTypes.STRING },
});
