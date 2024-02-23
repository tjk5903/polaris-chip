import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.title = "Campus Alert";
    this.message = '';
    this.dateTime = this.getCurrentDateTimeFormatted();
  }

  getCurrentDateTimeFormatted() {
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    const formattedDateTime = new Date().toLocaleString('en-US', options).replace('at', '');
    return formattedDateTime.toUpperCase();
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        border: 2px solid seashell;
        background-color: #b8860b;
        margin: 50px;
        padding: 25px;
        max-width: 1000px;
        height: 175px;
        align-items: center;
      }
      .date-time {
        display: inline;
        font-size: 1rem;
        font-family: 'Arial', sans-serif;
        margin: 5px 0;
        color: white;
        font-weight: bold;
      }
      .campus-alert {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid seashell;
  background-color: #b8860b;
  padding: 15px;
  max-width: 300px;
  height: auto;
  align-items: center;
  margin: 20px auto;
}

.alert-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
}

.close-button:hover {
  color: #ccc;
}

.slanted-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px; /* Adjust height as needed */
  background-color: #FFFF00;
  transform: skewX(10deg);
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
      <div class="slanted-card"></div>
      <div class="campus-alert">
        <p class="alert-title">Campus Alert</p>
        <p>${this.message}</p>
      </div>
      <button class="close-button" @click=${this.closeAlert}>×</button>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      message: { type: String, reflect: true },
      dateTime: { type: String }
    };
  }
}

customElements.define('campus-alert', CampusAlert);
globalThis.customElements.define(CampusAlert.tag, CampusAlert);