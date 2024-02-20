import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.title = "Counter App";
    this.counter = 0;
    this.min = "";
    this.max = "";
  }
  static get styles() {
    return css`
      :host {
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

.button-container {
      display: flex;
    }
button {
        display: flex;
        margin: 5px;
        padding: 5px 10px;
        font-size: 18px;
      }
button:hover {
  background-color: slateblue; 
}

button:focus {
  outline: none; 
  box-shadow: 0 0 0 2px lightblue; 
}
.counter {
  font-size: 32px;
  padding: 10px;
  color: beige;
}
.red-text {
  color: red;
}
.orange-text {
  color: orange;
}
@keyframes rainbow-animation {
  0% { color: red; }
  16.666% { color: orange; }
  33.333% { color: yellow; }
  50% { color: green; }
  66.666% { color: blue; }
  83.333% { color: indigo; }
  100% { color: violet; }
}

.rainbow-text {
  animation: rainbow-animation 3s infinite;
}
#confetti {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      animation: 5s;
    }

    `;
  } 
  increase() {
    if (this.counter < this.max) {
      this.counter += 1;
      this.requestUpdate();
    }
  }
  
  decrease() {
    if (this.counter > this.min) {
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

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      if (this.counter > this.max) {
        this.counter = this.max;
      }
      if (this.counter === 21) {
        this.makeItRain();
      }
      this.requestUpdate();
      }
    }
  render() {
    return html`
    <div class="counter ${this.counter === 0 ? 'red-text' : ''} ${this.counter === 18 ? 'orange-text' : ''} ${this.counter === 21 ? 'rainbow-text' : ''}">${this.counter}</div>
    <div class="button-container">
      <button @click=${this.decrease} ?disabled=${this.counter === 0}>-</button>
      <button @click=${this.increase} ?disabled=${this.counter === this.max}>+</button>

    </div>
    <confetti-container id="confetti"></confetti-container>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      counter: { type: Number, reflect: true },
      min: { type: Number },
      max: { type: Number }
    };
  }
}
customElements.define('counter-app', CounterApp);
globalThis.customElements.define(CounterApp.tag, CounterApp);

