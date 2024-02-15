import { LitElement, html, css } from 'lit';
/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.title = "Counter App";
    this.counter = "16";
  }
  static get styles() {
    return css`
      :host {
        display: block;
        border: 1px solid black;
        margin: 20px;
        padding: 20px;
}
a {
  text-decoration: none;
}
#counterApp {
  display: linear;
}

.btn-wrapper {
  background-color: white;
  padding: 10px;
  margin: 5px;
}

.btn {
  background-color: navy;
  color: white;
  font-size: 16px;
  border-radius: 10%;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px
}

.btn:focus,
.btn:hover {
  background-color: black;
}
.card {
  width: 100%;
  max-width: 830px;
  border: 5px solid navy;
  padding: 8px;
}
.card-content{
  border: 2px solid navy;
  padding: 2px;
}
.change-color {
  background-color: orange;
}
    `;
  }  
  render() {
    return html`
    <div class="counterApp"></div>
    <counter-app counter="16" min="10" max="25"></counter-app>
    </div>`;
  }

  static get properties() {
    return {
      label: { type: String, reflect: true },
      image: { type: String, reflect: true },
      bodyText: { type: String },
      description: { type: String, reflect: true},
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

