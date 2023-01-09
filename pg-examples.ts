import{ Client} from "pg"

async function maheQuery(){
    const client = new Client({
    
    user: 'student_server',
    password: '01456',
    database: 'school',
   })
await client.connect()
 
const res = await client.query('SELECT * FROM studen ', ['Hello world!'])
console.log("%j",res.rows) // Hello world!
await client.end()
}
