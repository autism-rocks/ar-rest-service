import {DatabaseORM} from '../database';
import  User from './user'

export default DatabaseORM.Model.extend({
    tableName: 'organization'
})
