import { DataTypes } from 'Sequelize';
import { db } from '../config';
import { User } from './user';

export const Room = db.define('Room', {
    name: DataTypes.STRING,
    topic: DataTypes.STRING,
    members: DataTypes.INTEGER,
});

User.belongsTo(Room);
Room.hasMany(User);
