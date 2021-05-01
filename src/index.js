import './style.css';
import { Layer } from './Layer/index.js';

console.log('funguju!');

//Zobrazeni a schovani navigace v menu

const zobrazeniNavigace = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

const schovaniNavigace = () => {
  document.querySelector('nav').classList.add('nav-closed');
};

document.querySelector('#nav-btn').addEventListener('click', zobrazeniNavigace);

const vyberPrvekzNavigace = document.querySelectorAll('nav a');
for (let i = 0; i < vyberPrvekzNavigace.length; i += 1) {
  vyberPrvekzNavigace[i].addEventListener('click', schovaniNavigace);
}

//Plneni hrnecku
let ordered = 'false';

const plnitHrnecek = () => {
  if (ordered === 'false') {
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    document.querySelector('.order-btn').textContent = 'Zrušit';
    ordered = 'true';
  } else {
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    document.querySelector('.order-btn').textContent = 'Objednat';
    ordered = 'false';
  }
};
document.querySelector('.order-btn').addEventListener('click', plnitHrnecek);

//Komponenta na vrstvy cappucina

const cappucino = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const layerElm = document.querySelector('.drink__info');
document.querySelector('.drink__info').innerHTML = `<h3>Cappuccino</h3>`;

for (let i = 0; i < cappucino.length; i += 1) {
  layerElm.innerHTML += Layer(cappucino[i]);
}
