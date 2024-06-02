# ProjetWebS6 - README
Projet Web S6 2024 - CIN3 ISEN

# __Pour lancer le serveur :__
  1) Installez la dernière version de NodeJS sur votre ordinateur : https://nodejs.org/en/download/package-manager
  2) Téléchargez le dossier ***'IntegrationFinale'*** du répertoire GitHub sur votre ordinateur. __Inutile de télécharger l'ensemble du répertoire.__
  Vous pouvez utiliser git pour cela en saisissant les commandes suivantes dans l'ordre et dans le dossier de votre choix :
  ```
  git clone --filter=blob:none --no-checkout https://github.com/Hamakomi/ProjetWebS6.git
  cd ProjetWebS6
  git sparse-checkout set --cone
  git checkout main
  git sparse-checkout set IntegrationFinale
  ```
  3) Ouvrez un shell dans le dossier ProjetWebS6/IntegrationFinale, et tapez la commande : ```node server``` pour   démarrer le serveur.
     Alternativement, ouvrez et lancez le fichier ```server.js``` avec un IDE approprié.
  5) Un message vous confirmant le lancement du serveur local devrait apparaître dans votre terminal ou la console de votre IDE : vous pouvez désormais accéder à l'ensemble du projet depuis votre navigateur à l'adresse http://127.0.0.1:8000

# __Pour naviguer :__
Pour accéder aux différentes sections du site, utilisez la barre de navigation en haut de votre écran.
__Chaque section est nommée d'après le groupe qui l'a réalisée.__
![démoSite](https://github.com/Hamakomi/ProjetWebS6/assets/81290969/2cea4dc1-5e42-4c2d-9566-0fce97c4194a)

Sur petit écran, la navigation se fait en appuyant sur le logo du site en haut à gauche. Un menu déroulant avec l'ensemble des sections apparaît alors.
![démoSite2](https://github.com/Hamakomi/ProjetWebS6/assets/81290969/c708c719-5259-4a71-968f-c74a538194f0)

Certaines sections comme l'AZIL et HELP2 sont liées par leur contenu, mais il est possible d'accéder à elles de façon indépendante par la barre de navigation.
