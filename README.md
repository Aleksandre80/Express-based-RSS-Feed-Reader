# WebsiteNews

Ce programme est un serveur Express qui utilise différentes bibliothèques pour fournir une réponse HTML.

Il utilise la bibliothèque express pour définir un serveur qui écoutera sur le port 3000. Lorsqu'une requête GET est reçue sur la route racine '/', le programme effectue une requête HTTP à l'URL http://feeds.feedburner.com/TheHackersNews en utilisant la bibliothèque fetch.

La réponse HTTP est ensuite convertie en texte, puis en utilisant la bibliothèque xml2js, elle est convertie en un objet JSON qui peut être facilement manipulé en JavaScript.

Le code extrait les éléments du canal RSS et les utilise pour créer une réponse HTML qui contient un carrousel de sections. Chaque section affichera le titre d'un article ainsi que sa date de publication et sera un lien vers l'article original. Le carousel est réalisé grâce à bootstrap

Enfin, la réponse HTML est envoyée au client qui a effectué la requête initiale.
