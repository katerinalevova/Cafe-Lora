import './style.css';

export const Layer = (props) => {
  return `
  <h3>Cappuccino</h3>
<div class="layer">
<div class="layer__color" style="background-color: ${props[0].color}"></div>
<div class="layer__label">${props[0].label}</div>
</div>
<div class="layer">
<div class="layer__color" style="background-color: ${props[1].color}"></div>
<div class="layer__label">${props[1].label}</div>
</div>

<div class="layer">
<div class="layer__color" style="background-color: ${props[2].color}"></div>
<div class="layer__label">${props[2].label}</div>
</div>`;
};
