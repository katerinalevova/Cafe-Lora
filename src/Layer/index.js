import './style.css';

export const Layer = (props) => {
  const element = document.createElement('div');
  document.querySelector('.drink__info').innerHTML = `<h3>Cappuccino</h3>`;

  for (let i = 0; i < props.length; i += 1) {
    element.innerHTML += `<div class="layer">
    <div class="layer__color" style="background-color: ${props[i].color}"></div>
    <div class="layer__label">${props[i].label}</div>
    </div>`;
  }
  return element;
};

// <div class="layer">
// <div class="layer__color" style="background-color: ${props[1].color}"></div>
// <div class="layer__label">${props[1].label}</div>
// </div>

// <div class="layer">
// <div class="layer__color" style="background-color: ${props[2].color}"></div>
// <div class="layer__label">${props[2].label}</div>
// </div>

// `<h3>Cappuccino</h3>`;
