import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.title = "Campus Alert";
    this.alert = "TEST CAMPUS ALERT";
    this.level = 'notice'; 
    this.date = '';
    this.sticky = false;
    this.opened = false;
    this.closedHeight = '50px'; 
    this.openHeight = '200px'; 
    this.stickyIndex = localStorage.getItem('campus-alert-sticky-index') === "true";
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

  toggleSticky() {
    this.stickyIndex = !this.stickyIndex;
    localStorage.setItem("campus-alert-sticky-index", this.stickyIndex ? "true" : "false");
    this.requestUpdate();
  }

  toggleAlert() {
    this.opened = !this.opened;
    localStorage.setItem("campus-alert-opened-state", this.opened ? "true" : "false");
    this.requestUpdate();
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        /* border: 2px solid var(--alert-background-color, seashell); */
        margin-bottom: 16px;
        padding: 25px;
        /* align-items: center; */
        color: var(--alert-text-color, black);
        background-color: var(--alert-background-color, blue);
        transition: background-color 0.3s ease; 

      }

      .date {
        position: absolute;
        top: 0px;
        left: 5px;
        font-size: 1rem;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
        color: var(--alert-date-color, white);
      }
      
      .test{
        display: flex;
        height: 200px;
        width: 100vw;
      }

      :host([sticky]) {
        position: sticky;
        top: 0px;
        z-index: 100;
      }

      .closedContainer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
      }
      .closed-text {
        color: black;
        font-weight: bold;
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 100%; 
      }
      .closed-toggle-button {
        margin-left: 10px; 
      }

      .campus-alert {
        position: relative;
        transition: height 0.3s ease; 
        overflow: hidden; 
        width: calc(100% + 30px);
        max-width: 1000px;
      }

      .close-button {
        position: absolute;
        top: 0px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--alert-close-button-color, white);
        cursor: pointer;
        z-index: 1;
      }
  
      .close-button:hover {
        color: var(--alert-close-button-hover-color, #ccc);
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
        width: 100%;
        background-color: var(--alert-background-color, blue);
      }
  
      .opened {
        height: var(--open-height, 200px);
        width: 100%;
      }

      .opened .close-button {
        display: block;
      }
      .info-button-closed {
        position: absolute;
        left: 335px;
      }
      .info-button-open {
        position: absolute;
        left: 200px;
      } 
    `;
  }

  render() {
    const currentDate = new Date();
    const options = { month: 'long', day: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedDate = currentDate.toLocaleString('en-US', options).toUpperCase();
    
    let textColor = 'black';
    let backgroundColor = 'blue';
    switch (this.importance) {
      case 'red':
        textColor = 'white';
        backgroundColor = 'red';
        break;
      case 'blue':
        backgroundColor = 'blue';
        break;
      case 'green':
        backgroundColor = 'green';
        break;
      case 'yellow':
        backgroundColor = 'yellow';
        break;
      default:
        break;
    }

    this.style.setProperty('--alert-text-color', textColor);
    this.style.setProperty('--alert-background-color', backgroundColor);

    const infoButtonClass = this.opened ? 'info-button-opened' : 'info-button-closed';

    return html`
      <div class="test">
        Hello world 
      </div>
    `;




  //   return html`
  // <div class="closedContainer">
  //   <div class="campus-alert ${this.opened ? 'opened' : 'closed'}">
  //     ${this.opened ? html`
  //       <div class="date">${formattedDate}</div>
  //       <button class="close-button" @click="${this.closeBanner}">&times; Close</button>
  //       <div class="${infoButtonClass}">
  //         <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.963 27.963" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="c129_exclamation"> <path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984 C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548 c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z"></path> <polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158 "></polygon> <path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528 C16.441,19.575,15.468,18.546,13.998,18.546z"></path> </g> <g id="Capa_1_207_"> </g> </g> </g></svg>
  //       </div>
  //       <div class="message-container">
  //         <div class="slanted-card" style="display: ${this.opened ? 'flex' : 'none'}">
  //           ${this.message} <!-- Display message within slanted card -->
  //         </div>
  //       </div>
  //     ` : html`
  //         <div class="closed-text">
  //           <div class="${infoButtonClass}">
  //             <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.963 27.963" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="c129_exclamation"> <path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984 C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548 c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z"></path> <polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158 "></polygon> <path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528 C16.441,19.575,15.468,18.546,13.998,18.546z"></path> </g> <g id="Capa_1_207_"> </g> </g> </g></svg>
  //           </div>
  //           TEST CAMPUS ALERT
  //           <div class="closed-toggle-button" @click="${this.toggleAlert}">
  //             <svg xmlns="http://www.w3.org/2000/svg" style="height: 50px; width: 50px;" viewBox="0 0 24 24">
  //               <title>chevron-down</title>
  //               <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  //             </svg>
  //           </div>
  //         </div>
  //       `}
  //       <div class="message-container">
  //         PENN STATE ALERT
  //         <div class="slanted-card" style="display: ${this.opened ? 'flex' : 'none'}">
  //           ${this.message}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // `;
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
      stickyIndex: { type: Boolean, reflect: true }, 
      importance: { type: String }

    };
  }
}

// customElements.define('campus-alert', CampusAlert);
globalThis.customElements.define(CampusAlert.tag, CampusAlert);