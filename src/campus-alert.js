import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.title = "Campus Alert";
    this.alert = "TEST CAMPUS ALERT";
    this.level = '';
    this.date = '';
    this.sticky = false;
    this.opened = localStorage.getItem('campus-alert-opened-state') === "true";
    this.closedHeight = '50px'; 
    this.openHeight = '200px'; 
  }

  closeBanner() {
    this.opened = false;
    localStorage.setItem("campus-alert-opened-state", "false");
    this.requestUpdate(); 
  }

  openBanner() {
    this.opened = true;
    localStorage.setItem("campus-alert-opened-state", "true");
    this.requestUpdate(); 
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        border: 2px solid seashell;
        margin: 50px;
        padding: 25px;
        max-width: 1000px;
        align-items: center;
      }

      .alert {
        font-weight: bold;
      }
  
      .date {
  position: absolute;
  top: 0px; /* Adjust the distance from the top */
  left: 5px; /* Adjust the distance from the left */
  font-size: 1rem; /* Adjust font size as needed */
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: white;
}
.closedContainer {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Ensure the children stretch to fill the width */
  width: 100%; /* Expand the container to fill the available width */
}
  
      .campus-alert {
  position: relative;
  transition: height 0.3s ease; 
  overflow: hidden; 
  width: calc(100% + 30px); /* Adjust the width to accommodate the close button */
  max-width: 1000px;
}

.close-button {
  position: absolute; /* Position the close button absolutely */
  top: -15px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  z-index: 1; /* Ensure close button is above other content */
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
        bottom: 0;
        right: 0;
        width: 100px;
        height: 100px; 
        transform: skewX(-10deg);
        color: black;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .message-container {
        position: relative;
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease;
      }

      .opened .message-container {
        height: auto;
      }
  
      .closed {
        height: var(--closed-height, 50px);
      }
  
      .opened {
  height: var(--open-height, 200px);
  width: 100%; /* Expand horizontally to fill the container */
}

      .opened .close-button {
        display: block; /* Display close button when the card is opened */
      }
    `;
  }

  toggleAlert() {
    this.opened = !this.opened;
    localStorage.setItem("campus-alert-opened-state", this.opened ? "true" : "false");
    this.requestUpdate();
  }

  render() {
    // Get the current date
    const currentDate = new Date();
    const options = { month: 'long', day: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedDate = currentDate.toLocaleString('en-US', options).toUpperCase();

    return html`
        <div class="closedContainer ${(this.sticky) ? "sticky" : ""}">
            <div class="closed-toggle-button" @click="${this.toggleAlert}">
                ${!this.opened ? html`
                    <svg xmlns="http://www.w3.org/2000/svg" style="height: 50px; width: 50px;" viewBox="0 0 24 24">
                        <title>chevron-down</title>
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>` : ''}
            </div>
            <div class="campus-alert ${this.opened ? 'opened' : 'closed'}">
                ${this.opened ? html`
                    <div class="date">${formattedDate}</div> <!-- Display the formatted date -->
                    <button class="close-button" @click="${this.closeBanner}">&times; Close</button>
                ` : ''}
                <div class="info-button">
                    <!-- Place your info button here -->
                </div>
                <div class="message-container">
                    <div class="slanted-card" style="display: ${this.opened ? 'flex' : 'none'}">
                        ${this.message}
                    </div>
                </div>
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
