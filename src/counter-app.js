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
  max-width: 500px;
  border: 5px solid navy;
  padding: 8px;
}
.card-content{
  border: 2px solid navy;
  padding: 2px;
}

    `;
  }  
  render() {
    return html`
    <div class="control-wrapper"> 
      <button class="subtract">-</button>
      <button class="add">+</button>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      counter: { type: Number, reflect: true },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);

