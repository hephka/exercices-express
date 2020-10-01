# Exercices express _ Partie 1

Usage : node app.js


Créer une programme app.js qui utilise express. Cette application devra tourner sur localhost 
et le port 7777. Avec votre navigateur en se connectant sur http://localhost:7777 on devra
récupérer le message 'Exercices express partie 1' Pour cela il faudra créer une route qui
manage le path / 
=> http://localhost:7777  


Ajouter une route /aboutme qui retournera à l'utilisateur des informations à propos de vous 
=> http://localhost:7777/aboutme  


Ajouter une route /aboutyou qui retournera à l'utilisateur des informations le concernant comme:

son ip
son user agent, c'est la version de son navigateur. Cette information peut être extraite depuis la propriété headers de la requête de l'utilisateur
=> http://localhost:7777/aboutyou


Ajouter une route /vote qui contient 1 paramètre qui correspondera à l'age. En fonction de l'age passé en paramètre on retournera les messages suivants dans le navigateur:

si age < 18, par example http://localhost:7777/age/17, on devra retourner 'trop jeune pour voter'
si age >= 18, par example http://localhost:7777/age/19, on devra retrouver 'Vous pouvez voter'
=> http://localhost:7777/vote/[Number]



Ajouter une route /palindromequi prendra un mot en paramètre. Un message devra être retourné à l'utilisateur si le mot est un palindrome. 
=> http://localhost:7777/palindrome/[*]

Ajouter une route /oddtest qui prendra un nombre en paramètre. Un message devra être retourné pour indiquer que le nombre passé en paramètre est pair ou impair

si le nombre est pair, par example http://localhost:7777/oddtest/2, on devra retourner 'pair'
si le nombre est impair, par example http://localhost:7777/oddtest/19, on devra retrouver 'impair'
=> localhost:7777/oddtest/[Number]