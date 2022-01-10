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

const nomeCarta = team[0].name;
pushNomeCarta.innerHTML = (nomeCarta);

const ruoloCarta = team[1].role;
pushRuoloCarta.innerHTML = (ruoloCarta);

const imgCarta = team[2].image;
const prova = document.getElementById("provaImg").src = (imgCarta);


//ottenere gli input per creare nuovi profili
//una volta ottenuti i dati dal Dom prendere i dati e inserirli in un nuovo oggetto
