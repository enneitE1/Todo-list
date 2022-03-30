// SELECTEURS
const input = document.getElementById('ChampDeRecherche');
const button = document.getElementById('bouton');
const liste = document.getElementById('listeUL');

button.innerText = 'Valider';
button.classList.add("bouton_valider");

// ECOUTEURS
// je crée un evenement au click sur le bouton de soumission, et j'y ajoute ma fonction.
button.addEventListener("click", nouvelElement);
liste.addEventListener("click", supprimer);

// FONCTIONS
// je crée une fonction pour ajouter un nouvel élément.
function nouvelElement(event){
	event.preventDefault();
	//Création LI
	const newTodo = document.createElement("li"); 
	newTodo.innerText = input.value; // affichage de la valeur comprise dans mon champ de recherche.
	newTodo.classList.add ("nouvelItem");
	
	liste.appendChild(newTodo); // ajout d'un LI (newTodo) dans le UL (liste).
	input.value = ""; // réinitialisation de la valeur comprise dans la barre de recherche.
	// Bouton supprimer
	const deleteButton = document.createElement('button');
	deleteButton.classList.add("bouton_supprimer");
	newTodo.appendChild(deleteButton);
	deleteButton.innerText ='Supprimer';
	// Bouton check
	const checkButton = document.createElement('button');
	checkButton.classList.add("bouton_check");
	newTodo.appendChild(checkButton);
	checkButton.innerText ='Tâche accomplie';

}
function supprimer(event) {
	const item = event.target;
	if (item.classList[0] === "bouton_supprimer") {
		item.parentElement.remove();
	}
}