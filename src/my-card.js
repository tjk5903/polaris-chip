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
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
  max-width: 400px;
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


@media only screen and (max-width: 800px) and (min-width: 501px) {
  .details-button {
    display: block;
  }
}
.details-button {
  display: none;
}

@media only screen and (max-width: 500px) {
  .card {
    max-width: 100%;
  }

  .card img {
    max-height: none;
  }
}
    `;
  }

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);