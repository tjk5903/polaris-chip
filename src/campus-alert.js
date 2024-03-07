import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.title = "Campus Alert";
    this.alert = "Default Message";
    this.level = '';
    this.date = '';
    this.sticky = false;
    this.opened = true;
    this.closedHeight = '50px';
    this.openHeight = '200px';
    if (localStorage.getItem('campus-alert-opened-state') == "false"){
      this.opened = false;
    }
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
      .date {
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
        font-weight: bold;
        float: right;
        padding: 10px;
        margin: 4px;
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
      open: { type: Boolean, reflect: true },
      message: { type: String, reflect: true },
      date: { type: String },
      sticky: { type: Boolean, reflect: true },
      closedHeight: { type: String },
      openHeight: { type: String },
    };
  }
}

customElements.define('campus-alert', CampusAlert);
globalThis.customElements.define(CampusAlert.tag, CampusAlert);
