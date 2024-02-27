import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.title = "Campus Alert";
    this.alert = '';
    this.date = '';
    this.sticky = false;
    this.closedHeight = '50px';
    this.openHeight = '200px';
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
      }
      .close-button {
        position: absolute;
        top: 0px;
        right: 0px;
        background: none;
        border: none;
        font-size: 1.2rem;
        color: white;
        cursor: pointer;
      }
      .close-button:hover {
        color: #ccc;
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
      .slanted-card {
        position: absolute;
        bottom: 10;
        left: 20;
        width: 100px;
        height: 150px;
        background-color: #FFFF00;
        transform: skewX(10deg);
      }
    `;
  }

  render() {
    return html`
      <div class="campus-alert">
        <p>${this.message}</p>
        <p class="date-time">${this.dateTime}</p>
        <button class="close-button" @click=${this.closeAlert}>×</button>
      </div>
      <div class="slanted-card"></div>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      message: { type: String, reflect: true },
      dateTime: { type: String },
      sticky: { type: Boolean, reflect: true },
      closedHeight: { type: String },
      openHeight: { type: String },
    };
  }
}

customElements.define('campus-alert', CampusAlert);
globalThis.customElements.define(CampusAlert.tag, CampusAlert);
