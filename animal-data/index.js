import Client from 'pg/lib/client.js'
//probando si sube a github
async function makeQuery(animal_class, diet, behavior, age ,lifespan)

{const client = new Client({
        user: 'animal_server',
        password: '01456',
        database: "animals"
      })
      await client.connect()
    
      const res = await client.query(
        `INSERT INTO public.animals(animal_class, diet, behavior, age ,lifespan)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
       [animal_class, diet, behavior, age ,lifespan]
       
      )
      console.log("%j", res.rows)
      await client.end()
}

      makeQuery("pato","pan","bla",'5','10')
