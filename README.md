# ProjetWebS6 - README
Projet Web S6 2024 - CIN3 ISEN

# __Pour lancer le serveur :__
  1) Installez la dernière version de NodeJS sur votre ordinateur : https://nodejs.org/en/download/package-manager
  2) Téléchargez le dossier ***'IntegrationFinale'*** du répertoire GitHub sur votre ordinateur. __Inutile de télécharger le reste.__
  Vous pouvez utiliser git pour cela en saisissant les commandes suivantes dans l'ordre :
  ```
  git clone --filter=blob:none --no-checkout https://github.com/Hamakomi/ProjetWebS6.git
  cd ProjetWebS6
  git sparse-checkout set --cone
  git checkout main
  git sparse-checkout set IntegrationFinale
  ```
  3) Ouvrez un shell dans le dossier ProjetWebS6/IntegrationFinale, et tapez la commande : ```node server```
  4) Un message vous confirmant le lancement du serveur local devrait apparaître : vous pouvez désormais accéder à l'ensemble du projet depuis votre navigateur à l'adresse http://127.0.0.1:8000
# __Pour naviguer :__

