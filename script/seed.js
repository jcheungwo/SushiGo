const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  const users = await Promise.all([
    User.create({name: 'jeff', email: 'jeff@email.com', password: '123'}),
    User.create({name: 'will', email: 'will@email.com', password: '123'}),
    User.create({name: 'nick', email: 'nick@email.com', password: '123'}),
    User.create({name: 'jimmi', email: 'jimmi@email.com', password: '123'}),
  ])
  console.log(`seeded ${users.length} users`)

  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
