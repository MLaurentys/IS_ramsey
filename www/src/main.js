import { Header } from './header.js';

const init = () => {
  const url = 'data/all.json';
  customElements.define('is-header', Header);
};

window.onload = init;
