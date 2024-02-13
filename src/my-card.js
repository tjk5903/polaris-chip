import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.label = "Penn State Sports";
    this.image = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/640px-Penn_State_Nittany_Lions_logo.svg.png";
    this.bodyText = "Penn State beats Wisconsin!";
    this.description = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: 1px solid black;
        margin: 20px;
        padding: 20px;
      }
      :host([fancy]) {
        display: block;
        background-color: seashell;
        border: 4px solid white;
        box-shadow: 10px 5px 5px lightblue;
}
a {
  text-decoration: none;
}
#cardlist {
  display: flex;
}

.btn-wrapper {
  background-color: white;
  padding: 10px;
  margin: 5px;
}

.btn {
  background-color: navy;
  color: white;
  font-size: 16px;
  border-radius: 10%;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px
}

.btn:focus,
.btn:hover {
  background-color: black;
}
.card {
  width: 100%;
  max-width: 830px;
  border: 5px solid navy;
  padding: 8px;
}
.card-content{
  border: 2px solid navy;
  padding: 2px;
}
.change-color {
  background-color: orange;
}
.label {
  font-weight: bold;
}


img {
  height: 300px;
  width: 400px;
}

details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
    <div>
      <img
      class="img"
      src="${this.image}"/>
      <h1 class="label">${this.label}</h1>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          This is my amazing description, thank you for reading!
          <div>
            <slot>${this.description}</slot>
         </div>
        </details>
    </div>`;
  }

  static get properties() {
    return {
      label: { type: String, reflect: true },
      image: { type: String, reflect: true },
      bodyText: { type: String },
      description: { type: String, reflect: true},
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);