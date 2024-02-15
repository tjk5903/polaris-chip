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
      :host([counter="16"]) {
        display: flex;
        border: 5px solid seashell;
        background-color: slateblue;
        margin: 50px;
        padding: 25px;
        max-width: 100px;
        height: 150px;
}

    `;
  }  
  increase(){
    this.counter += 1;
  }
  decrease(){
    this.counter -= 1;
  }
  render() {
    return html`
    <div class="control-wrapper"> 
      <div>${this.counter}</div>
      <button class="subtract">-</button>
      <button class="add">+</button>
      </div>
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

