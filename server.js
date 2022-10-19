import express from   'express';
import {v4} from   'uuid';

const app = express();
app.get('/', (req, res) => {
    res.json({
        id: v4()
    })    
})

/* const client = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',    
    password: '123'
})

const repos = await client.query('SELECT 1+1')
console.log(repos)



const mongoConect = await  mongoose.connect('mongodb://localhost:27017/twic')
console.log(mongoConect.connection.db.databaseName)

 */
app.listen(3000);

console.log('listening on port 3000 ...');