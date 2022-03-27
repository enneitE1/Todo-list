const input = document.getElementById('ChampDeRecherche');
const button = document.getElementById('bouton');
const liste = document.getElementById('listeUL');

button.innerText = 'Valider';
button.classList.add("bouton_valider");

// je crée un evenement au click sur le bouton de soumission, et j'y ajoute ma fonction.
button.addEventListener("click", nouvelElement);

// deleteButton.addEventListener("click", supprimer);

// je crée une fonction pour ajouter un nouvel élément.
function nouvelElement(event){
	event.preventDefault();
	
	const newTodo = document.createElement("li"); // création d'un élément LI
	newTodo.innerText = input.value; // affichage de la valeur comprise dans mon champ de recherche.
	newTodo.classList.add ("nouvelItem");
	
	liste.appendChild(newTodo); // ajout d'un LI (newTodo) dans le UL (liste).
	input.value = ""; // réinitialisation de la valeur comprise dans la barre de recherche.

	const deleteButton = document.createElement('button');
	deleteButton.classList.add("bouton_supprimer");
	newTodo.appendChild(deleteButton);
	deleteButton.innerText ='Supprimer';

}
function supprimer(deleteButton){
	
	deleteButton.preventDefault();
	deleteButton.addEventListener("click", supprimer);
	liste.parentNode.removeChild(newTodo);
	
}