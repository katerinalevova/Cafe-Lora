import './style.css';
import { Layer } from '../Layer/index.js';

const napoj = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const Drink = (napoj) => {
  Layer();
};
