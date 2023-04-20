
# Quizventure

Ce projet est un quiz en JavaScript qui affiche des questions aléatoires à l'utilisateur et gère les réponses de l'utilisateur. Les questions peuvent être de type vrai ou faux ou de type choix multiples.

## Comment ça marche

Le code contient un tableau de questions qui sont affichées de manière aléatoire. Les questions peuvent être de type vrai ou faux ou de type choix multiples. Le code gère également les réponses de l'utilisateur et affiche le score final.*


## Variables

-   `questions`: un tableau qui contient toutes les questions du quiz.
-   `indexQuestionActuelle`: un entier qui contient l'index de la question actuelle affichée.
-   `score`: un entier qui contient le score de l'utilisateur.
-   `questionRestant`: un tableau qui contient toutes les questions qui n'ont pas encore été affichées.
-   `container`: un élément HTML qui représente le conteneur pour la question et les options.
-   `aContainer`: un élément HTML qui représente le conteneur pour les réponses.
-   `quizVenture`: un élément HTML qui représente le conteneur principal du quiz.
-   `title`: une chaîne de caractères qui contient le titre du quiz.
-   `questionText`: un élément HTML qui représente la question en cours.
-   `optionsContainer`: un élément HTML qui représente le conteneur pour les options de réponse.
-   `resetButton`: un élément HTML qui représente le bouton de réinitialisation.


## Fonctions

-   `displayRandomQuestion()`: une fonction qui affiche une question aléatoire à partir de questionRestant.
-   `checkAnswer(answer)`: une fonction qui vérifie si la réponse de l'utilisateur est correcte et met à jour le score en conséquence.
-   `resetQuiz()`: une fonction qui réinitialise le quiz.


## Comment utiliser

-   Cloner le dépôt sur votre machine locale.
-   Ouvrir le fichier `index.html` dans votre navigateur.
-   Jouer au quiz et vérifier vos réponses via https://wichydarx.github.io/quizVenture/.

## Auteur

 Ce projet a été créé par **@wichydarx.**
