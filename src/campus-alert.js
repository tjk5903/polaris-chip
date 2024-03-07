import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.open = true; 
    this.status = ''; 
    this.date = ''; 
    this.sticky = false; 
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
        .opened {
        height: auto;
      }
    `;
  }

  toggleAlert() {
    this.opened = !this.opened;
    const container = this.shadowRoot.querySelector('.closedContainer');
    if (this.opened) {
      container.style.height = this.openHeight;
    } else {
      container.style.height = this.closedHeight;
    }
    if (!this.opened) {
      localStorage.setItem('campus-alert-opened-state', 'false');
    } else {
      localStorage.removeItem('campus-alert-opened-state');
    }
  }

  render() {
    return html`
      <div class="closedContainer ${(this.sticky) ? "sticky" : ""}">
        <div class ="closed-toggle-button" @click="${this.toggleAlert}">
          ${this.opened ? html`
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 50px; width: 50px;" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          ` : html`
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 50px; width: 50px;" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
          `}
          Alert!
        </div>
        <div class="campus-alert" style="height: ${(this.opened) ? this.openHeight : this.closedHeight};">
          ${this.alert}
        </div>
      </div>
    `;
  }

static get properties() {
  return {
    level: { type: String },
      open: { type: Boolean, reflect: true },
      message: { type: String },
      date: { type: String },
      sticky: { type: Boolean, reflect: true },
      closedHeight: { type: String }, 
      openHeight: { type: String }, 
    };
  }
}

customElements.define('campus-alert', CampusAlert);
globalThis.customElements.define(CampusAlert.tag, CampusAlert);
