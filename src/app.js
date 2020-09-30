/* Créer une programme app.js qui utilise express. Cette application devra tourner sur localhost 
et le port 7777. Avec votre navigateur en se connectant sur http://localhost:7777 on devra
récupérer le message 'Exercices express partie 1' Pour cela il faudra créer une route qui
manage le path / */

import express from 'express'
import chalk from 'chalk'

const PORT = 7777

const app = express()

app.get('/', (req, res) => {
    res.send(`
    <h1 
        style="text-align: 
        center; font-size: 3rem; 
        margin-top: 2rem; color: #686868"
    >
    Exercices <em>express</em> partie 1
    </h1>
    `)
})

app.get('/aboutme', (req, res) => {
    res.send(`
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    `)
})

app.listen(PORT, () => {
    console.log(`Exercice `+chalk.bgBlue(`express`)+` listening at `+chalk.green(`http://localhost:${PORT}`))
})
