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
    this.counter = 0;
    this.values = [0, 1, 2, 3, 4,, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18 , 19 ,20 ,21];
  }
  static get styles() {
    return css`
      :host([counter="16"]) {
        display: flex;
        flex-direction: column;
        border: 5px solid seashell;
        background-color: slateblue;
        margin: 50px;
        padding: 25px;
        max-width: 100px;
        height: 150px;
        align-items: center;
}
button {
        margin: 5px;
        padding: 5px 10px;
        font-size: 18px;
      }

    `;
  }  
  increase() {
    const index = this.counter;
    if (values && index >= 0 && index < values.length) {
      values[index]++;
      this.requestUpdate();
    }
  }
  decrease(){
    this.counter -= 1;
    this.requestUpdate();
  }
  render() {
    return html`
    <div>${this.counter}</div>
    <button @click=${this.decrease}>-</button>
    <button @click=${this.increase}>+</button>
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

