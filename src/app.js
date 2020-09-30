import express from 'express'
import chalk from 'chalk'

const PORT = 7777
const aboutMe = {
    tag: 'Hephka',
    promo: 'EthersJS',
    token: 'O',
    skills: [
        'HTML5',
        'CSS3',
        'Bootstrap5',
        'ReactJS'
    ]
}
const title = `
<header>
<h1 
    style="text-align: 
    center; font-size: 3rem; 
    margin-top: 2rem; 
    color: #686868"
>
Exercices <em>express</em> partie 1
</h1>
</header>
`
const main_aboutme = `
<main style='text-align: center; font-size: 1.5rem; margin-top: 5rem'>
<p>Bonjour, moi c'est ${aboutMe.tag} de la promo ${aboutMe.promo}. Je joue les <i style='color:yellow'>${aboutMe.token}</i> au puissance4 mais tu n'es pas là pour ça ...
</br>Tu veux plutôt connaître mes compétences comme dev front je te les présente ci-dessous : </p>
<ul style="list-style: none;">
    <li>${aboutMe.skills[0]}</li>
    <li>${aboutMe.skills[1]}</li>
    <li>${aboutMe.skills[2]}</li>
    <li>${aboutMe.skills[3]}</li>
</ul>
<p>Si tu te demandes pourquoi je ne parle pas du back end tu verras dans mon code que je ne suis pas encore au point... ;-)</p>
</main>
`

/* Créer une programme app.js qui utilise express. Cette application devra tourner sur localhost 
et le port 7777. Avec votre navigateur en se connectant sur http://localhost:7777 on devra
récupérer le message 'Exercices express partie 1' Pour cela il faudra créer une route qui
manage le path / */

const app = express()

app.get('/', (req, res) => {
    res.send(title)
})

app.get('/aboutme', (req, res1) => {
    res1.send(title + main_aboutme)
})

app.listen(PORT, () => {
    console.log(`Exercice `+chalk.bgBlue(`express`)+` listening at `+chalk.green(`http://localhost:${PORT}`))
})
