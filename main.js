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

const container = document.querySelector(".team-container");

for(let i = 0; i < team.length; i++){
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

let bottone = document.getElementById("addMemberButton").addEventListener("click", function() {
  const takeName = document.querySelector(".form-container");
  console.log(takeName);
});