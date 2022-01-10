const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

const container = document.querySelector(".team-container");                             //creata variabile per container

for(let i = 0; i < team.length; i++){                                                   //crato ciclo per card base 
  container.innerHTML += `
  <div class="team-card">
    <div class="card-image" id="pushImgCarta">
      <img src="${team[i].image}" id="provaImg">
    </div>
    <div class="card-text">
      <h3 id="pushNomeCarta">${team[i].name}</h3>
      <p id="pushRuoloCarta">${team[i].role}</p>
    </div>
  </div>
`;
}


document.getElementById("addMemberButton").addEventListener("click", function() {     //funziona che si abilita al click sul Form all'interno del nostro dom
  const takeName = document.getElementById("name").value;                             //ottenuti dato "nome"
  const takeRole = document.getElementById("role").value;                             //ottenuti dato "ruolo"
  const takeImage = document.getElementById("image").value;                           //ottenuti dato "immagine descrittiva"

  const datiUtenteForm = {name: takeName, role: takeRole, image: takeImage,};         //Creato nuovo oggetto con i dati recepiti dal form immessi dalll'utente
  team.push(datiUtenteForm);                                                          //Aggiunta dell'oggetto all'interno dell'array

  container.innerHTML +=                                                            //aggiunta della nuova carta attraverso i dati reccepiti dal form
  `                                                            
  <div class="team-card">
    <div class="card-image" id="pushImgCarta">
      <img src="${datiUtenteForm.image}" id="provaImg">
    </div>
    <div class="card-text">
      <h3 id="pushNomeCarta">${datiUtenteForm.name}</h3>
      <p id="pushRuoloCarta">${datiUtenteForm.role}</p>
    </div>
  </div>
`;

});
