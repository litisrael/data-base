import { randomUUID } from "crypto"
import pg from 'pg';
const { Client } = pg;

async function makeQuery(
    name, birthday, country, city, 
    street_1, postal_code, phone_number
) {
    const client = new Client({
        user: 'student_server',
        password: '01456',
        database: "school"
      })
    await client.connect()
    
    const id = randomUUID();
    const res = await client.query(
        `INSERT INTO student.student(id, name, birthday, country, city, street_1, postal_code, phone_number)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
         [id, name, birthday.toISOString(), country, city, street_1, postal_code, phone_number]
    )
    console.log("%j", res.rows)
    await client.end()
}

makeQuery("Yaki", new Date("09/24/1984"), "Israel", "Jerusalem", "Some Street", "12345", "0506421356");