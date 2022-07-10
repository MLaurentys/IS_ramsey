const template = document.createElement('template');
template.innerHTML = `
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
/>
<style>
h1{
  font-family: SfDistantGalaxy,sans-serif;
  letter-spacing: 1px;
  font-size: 3em;
  color:snow;
  display: inline-block;
}
.navbar {
  background-color:#F8F8F8;
}
.title-row {
  min-height:15vh;
  background-position: 50% 50%;
}
</style>
<header>
  <div class="title-row">
    <h1 class="ml-2 pt-3"> Online Ramsey Theory </h1>
  </div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="pages">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="pages">
      <div class="navbar-start" >
        <a class="navbar-item" id="item-0" href="https://people.rit.edu/mtl9706/is/"> Home
        </a>
        <a class="navbar-item" id="item-1" href="https://people.rit.edu/mtl9706/is/app"> App
        </a>
        <a class="navbar-item" id="item-2" href="https://people.rit.edu/mtl9706/is/report"> Final Report
        </a>
        <a class="navbar-item" id="item-3" href="https://people.rit.edu/mtl9706/is/logs"> Activities
        </a>
      </div>
    </div>
  </nav>
</header>
`;
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.setImages = this.setImages.bind(this);
    this.h1 = this.shadowRoot.querySelector('h1');
    this.item = this.shadowRoot.querySelector(`#item-${this.dataset.page}`);
    this.item.className += ' has-text-link has-background-light';
    this.pageItems = this.shadowRoot.querySelector('#pages');
    this.shadowRoot.querySelector('.navbar-burger').onclick = (el) => {
      el.target.classList.toggle('is-active');
      this.pageItems.classList.toggle('is-active');
    };
    this.setImages();
  }

  setImages() {
    VANTA.NET({
      el: this.shadowRoot.querySelector('.title-row'),
      points: 20.0,
      spacing: 12.0,
      maxDistance: 25.0,
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  attributeChangedCallback() {
    this.render();
  }

  static get observedAttribute() {
    return ['data-title'];
  }

  render() {}
}

export { Header };
