/* // import de express
import express from 'express'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 3000

// définition d'une route '/', la route par défaut.
// lorsqu'un client effectuera une requête sur ce endpoint
// on lui retournera le texte 'Hello World!' via la callback/
// Cette callback est aussi appellée 'handler function'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// démarrage de notre serveur sur le port 3000
app.listen(PORT, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`Example app listening at http://localhost:${PORT}`)
}) */



/* import express from 'express'
const app = express()

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.14' // my local ip on my network
const PORT = 3001

// GET sur la racine
app.get('/', (req, res) => {
  //nous recupérons l'ip source de la requête
  res.send(`Welcome ${req.ip} to my first express app.`)
})

// POST sur la racine
app.post('/', (req, res) => {
  res.send("Sorry we don't post requests yet.")
})

// route path match acd and abcd
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })

// GET sur '/hello'
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

// GET sur '/hello/sofiane'
app.get('/hello/sofiane', (req, res) => {
  res.send('Hello Sofiane!')
})

// GET sur '/hello/franck'
app.get('/hello/franck', (req, res) => {
  res.send('Hello Franck!')
})

// start the server
app.listen(PORT, IP_LOOPBACK, () => {
  console.log(`Example app listening at http://${IP_LOOPBACK}:${PORT}`)
}) */



/* // import de express
import express from 'express'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 3000

// définition d'une route '/', la route par défaut.
// lorsqu'un client effectuera une requête sur ce endpoint
// on lui retournera le texte 'Hello World!' via la callback/
// Cette callback est aussi appellée 'handler function'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// a route with parameters userId & BookId
// GET /users/11/books/13
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(
    `Book with id ${req.params.bookId} for user with id ${req.params.userId}`
  )
})

// démarrage de notre serveur sur le port 3000
app.listen(PORT, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`Example app listening at http://localhost:${PORT}`)
})
console.log(app) */

import express from 'express'

const app = express()
console.log(app)