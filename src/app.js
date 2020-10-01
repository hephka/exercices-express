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
const countryMajority = {
    france: 18,
    usa: 21
}


const app = express()

app.get('/', (req, res) => {
    res.send(title)
})

app.get('/aboutme', (req, res) => {
    res.send(title + main_aboutme)
})

app.get('/aboutyou', (req, res) => {
    res.send(title + `
    <main style='font-size: 1.5rem; margin-top: 5rem'>
    <p>Quoi que j'ai quand même appris quelques bases, laisse moi te montrer de quoi je suis capable...</p>
    <p>Pour commencer je te présente ton adresse IP : ${req.ip}
    </br>Et voici la version de ton <i lang ='en'>browser</i> : ${req.headers['user-agent']}</p>
    </main>
    `)
})

app.get('/vote/:userAge', (req, res) => {
    if (isNaN(req.params.userAge)) {
        res.send(`Error: ${req.params.userAge} is not a number`)
      }
    else if (req.params.userAge >= countryMajority.france) {
        res.send(title + 'Félicitation tu vas pouvoir voter!')
    } else res.send(title + `Désolé tu n'es pas majeur(e)... Reviens dans ${countryMajority.france - req.params.userAge} an(s).`)
})

app.get('/palindrome/:el', (req, res) => {
    if (req.params.el === req.params.el.split('').reverse().join('')) {
        res.send(title + `${req.params.el} est un palindrome`)
      } else {
        res.send(title + `${req.params.el} n'est pas un palindrome`)
      }
})

app.get('/oddtest/:nb', (req, res) => {
    if (isNaN(req.params.nb)) {
        res.send(`Error: ${req.params.nb} is not a number`)
      }
    res.send(req.params.nb % 2 === 0 ? `${req.params.nb} est pair` : `${req.params.nb} est impair`)
})
 
app.listen(PORT, () => {
    console.log(`Exercice `+chalk.bgBlue(`express`)+` listening at `+chalk.green(`http://localhost:${PORT}`))
})
