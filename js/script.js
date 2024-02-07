
// Récupération de l'input
let input = document.querySelector('#zone');

// Récupération de la div parent qui affichera les tâches ajoutées
let todo = document.querySelector('.ToDo');

// Récupération du bouton "ajouter" et ajout de l'évènement au click
document.querySelector('#addTo').addEventListener('click', maFonction);

// Récupérer les taches entrées dans le système et conservées dans le stockage local pour qu'elles restent présentent tant qu'on ne les a pas supprimées.
todo.innerHTML = localStorage.getItem("tache")
// Fonction à exécuter au click sur le bouton "ajouter"
function maFonction (){
  // Pose de la condition: si la valeur de l'input est différente de nulle
  if(input.value != ""){ 
    // On créé une div
    let tache = document.createElement('li');
    // On ajoute à cette div une classe pour lui donner du style
    tache.classList.add('tache_style');
    // On ajoute du contenu dans la div créée en y insérant la valeur renseignée dans l'input
    tache.textContent = input.value;
    // On demande à la div créée de se placer comme un enfant de la div parent "todo"
    todo.appendChild(tache);
    // On ajoute un évènement au double click sur la div créée contenant la tâche ajoutée
    tache.addEventListener('dblclick', removeList);
    // Fonction à exécuter au double click sur la div créée
    function removeList(){
      // On supprime la div créée
      tache.remove();
      localStorage.clear();
    }
    
    // Détermination du stockage local pour qu'il enregistre tout le contenu html du parent "todo".
    localStorage.setItem("tache" ,todo.innerHTML)
  }
  // A la fin de l'éxécution de la fonction, on restaure la valeur de l'input pour qu'il soit vide
  input.value = "";
}


// window.onload = function() {

//   if(localStorage.getItem("tache") != null){
//     // Code à exécuter une fois la fenêtre chargée
//     document.querySelector('.titre').textContent = `Bonjour ${localStorage.getItem("tache")}`;

//   }
// };









