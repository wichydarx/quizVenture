//tableau json contenant les question du quiz
let questions = [
    {
        text: "La capitale de la France est Paris.",
        type: "vrai ou faux",
        answer: "vrai",
    },
    {
        text: "Le symbole chimique de l'or est Au.",
        type: "vrai ou faux",
        answer: "vrai",
    },
    {
        text: "La Terre est la troisième planète du système solaire.",
        type: "vrai ou faux",
        answer: "vrai",
    },
    {
        text: "Le JavaScript est un langage compilé.",
        type: "vrai ou faux",
        answer: "faux",
    },
    {
        text: "Le nom complet de JS est Java Script.",
        type: "vrai ou faux",
        answer: "faux",
    },
    {
        text: "Quelles sont les 3 couleurs primaires ?",
        type: "choix multiples",
        options: ["bleu", "vert", "rouge", "jaune"],
        answer: ["bleu","rouge","jaune"]
    },
    {
        text: "Quels résultats correspondent à 2 + 2 ?",
        type: "choix multiples",
        options: ["3", "4", "2*2", "6"],
        answer: ["4", "2*2"],
    },
    {
        text: "Quels pays font partie des BRICS ?",
        type: "choix multiples",
        options: ["Chine", "Russie", "Canada", "États-Unis"],
        answer: ["Russie","Chine"]
    },
    {
        text: "Qui sont les deux présidents avant le président actuel de la France ?",
        type: "choix multiples",
        options: [
            "Emmanuel Macron",
            "François Hollande",
            "Nicolas Sarkozy",
            "Jacques Chirac",
        ],
        answer: ["François Hollande", "Nicolas Sarkozy"]
    },
    {
        text: "Quelles sont les langues les plus parlées au monde ?",
        type: "choix multiples",
        options: ["Anglais", "Mandarin", "Espagnol", "Français"],
        answer: ["Mandarin","Anglais"]
    },
];

let indexQuestionActuelle;
let score;
let questionRestant = [...questions];
const container = document.getElementById("question-container");
const aContainer = document.getElementById("answer-container");
const quizVenture = document.getElementById("quizvententure");
const title = "Quizventure";
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resetButton = document.getElementById("reset");


function displayRandomQuestion() {
    //affichage des questions de maniere aleatoire
    if (questionRestant.length === 0) {
        questionText.innerText =
            "Vous avez répondu à toutes les questions ! Votre score est de " +
            score +
            "/" +
            questions.length +
            ".";
        optionsContainer.style.display='none'
        //creer un bouton pour afficher les question et réponse
        let showAnswer = document.createElement('button')
        showAnswer.classList.add('btn-show')
        showAnswer.innerText ='Voir les reponses'
        container.insertBefore(showAnswer,aContainer)
        showAnswer.addEventListener("click", function () {
            // Boucle sur chaque question
            for (let i = 0; i < questions.length; i++) {
                let questionText = questions[i].text;
                let questionAnswer = questions[i].answer;

                // Crée un élément <p> pour afficher le texte de la question
                let q = document.createElement("p");
                q.innerText = "Q : "+questionText;

                // Crée un élément <p> pour afficher la bonne réponse
                let r = document.createElement("p");
                r.innerText =
                    "R : " + questionAnswer;

                // Ajoute les éléments à la page
                aContainer.appendChild(q);
                aContainer.appendChild(r);
            }
            // toggle l'affichage du bloc reponse 
            if (aContainer.style.display === "none") {
                aContainer.style.display = "block";
            } else {
                aContainer.style.display = "none";
            }
        });
        return;
    }
    //faire un index aléatoire pour les question
    const randomQuestionIndex = Math.floor(
        Math.random() * questionRestant.length
    );
    indexQuestionActuelle = randomQuestionIndex;
    const qActuelle = questionRestant[indexQuestionActuelle];
    questionText.textContent =qActuelle.text
    optionsContainer.innerHTML = "";
    //creation des boutons vrai ou faux
    if (qActuelle.type === "vrai ou faux") {
        const trueBtn = document.createElement("button");
        trueBtn.classList.add("btn-answer","true")
        trueBtn.innerText = "Vrai";
        trueBtn.addEventListener("click", () => {
            checkAnswer("vrai");
        });
        optionsContainer.appendChild(trueBtn);


        const falseBtn = document.createElement("button");
        falseBtn.classList.add("btn-answer", "false");
        falseBtn.innerText = "Faux";
        falseBtn.addEventListener("click", () => {
            checkAnswer("faux");
        });
        optionsContainer.appendChild(falseBtn);
    } 
    //affichage des des question a choix multiple
    else if (qActuelle.type === "choix multiples") {
        //on boucle sur les differentes options et 
        //on cree un input checkbox pour chaque options
        for (let i = 0; i < qActuelle.options.length; i++) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add('css-checkbox')
            checkbox.value = qActuelle.options[i];
            checkbox.id = "option" + i;
            const label = document.createElement("label");
            label.innerText = qActuelle.options[i];
            label.setAttribute("for", "option" + i);
            optionsContainer.appendChild(checkbox);
            optionsContainer.appendChild(label);
        }
        // creation du bouton submit pour valider
        const submitButton = document.createElement("button");
        submitButton.innerText = "Valider";
        submitButton.classList.add('btn-submit')
        //ajout de l'eventListner pour pouvoir passer aux autres questions
        submitButton.addEventListener("click", () => {
            //recuperation des options selectionnées 
            //en les mettant dans un tableau
            const selectedOptions = Array.from(
                document.querySelectorAll('input[type="checkbox"]:checked')
            ).map((cb) => cb.value);
            //on compare le tableau récupéré avec le tableau des réponses
            checkAnswer(selectedOptions);
        });
        optionsContainer.appendChild(submitButton);
    }
}
//fonction effet d'ecriture sur le titre de l'application
const autoWrite = (element, text) => {
    let index = 0;

    const updateText = () => {
        element.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            index = 0;
        }
    };

    setInterval(updateText, 500);
};
autoWrite(quizVenture, title)
//fonction de vérification des reponses recupérées
function checkAnswer(answer) {
    const qActuelle = questionRestant[indexQuestionActuelle];
    const isCorrect =
        answer instanceof Array
            ? answer.sort().toString() ===
              qActuelle.answer.sort().toString()
            : answer === qActuelle.answer;

    if (isCorrect) {
        score++;
    }
    questionRestant.splice(indexQuestionActuelle, 1);
    displayRandomQuestion();
}
//fonction permettant de réinitialiser le quiz
function resetQuiz() {
    questionRestant = [...questions];
    score = 0;
    resetButton.style.display = "block";
    displayRandomQuestion();
}
resetButton.classList.add("btn-reset");
resetButton.addEventListener('click',function () {
    const showBtn = document.querySelector(".btn-show");
    const optionsDisplay = document.getElementById("options");
    showBtn.style.display = "none";
    optionsDisplay.style.display = 'block'
})
resetButton.addEventListener("click", resetQuiz);

resetQuiz();
