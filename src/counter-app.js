import { LitElement, html, css } from 'lit';

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
        flex-direction: column;
        border: 5px solid seashell;
        background-color: slateblue;
        margin: 50px;
        padding: 25px;
        max-width: 150px;
        height: 150px;
        align-items: center;
}
button {
        display: flex;
        margin: 5px;
        padding: 5px 10px;
        font-size: 18px;
      }
.counter {
  font-size: 32px;
  padding: 10px;
  color: beige;
}

    `;
  }  
  increase() {
    if (this.counter < 21) {
      this.counter += 1;
      this.requestUpdate();
    }
  }
  decrease(){
    if (this.counter > 0) {
      this.counter -= 1;
      this.requestUpdate();
    }
  }
  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
  render() {
    return html`
    <div class="counter">${this.counter}</div>
    <button @click=${this.decrease} ?disabled=${this.counter === 0}>-</button>
    <button @click=${this.increase} ?disabled=${this.counter === 21}>+</button>
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

