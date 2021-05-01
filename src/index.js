import './style.css';

console.log('funguju!');

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
