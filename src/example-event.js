import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";


class ExampleEvent extends DDD {
  static properties = {
    items: { type: Array },
    userInput: { type: String }
  }

  static styles = css`
    :host {
      display: block;
    }

    .user-list-container {
      background-color: lightblue;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .user-input-container {
      margin-bottom: 10px;
    }

    input[type="text"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: "Press Start 2P", system-ui;
    }

    .user-input-container button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #5776ff;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .user-input-container button:hover {
      background-color: #0004ff;
    }

    my-item  {
      display: block;
      background-color: seashell;
      padding: 16px;
      margin-bottom: 10px;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      width: 65%;
    }

    my-item .content {
      margin-bottom: 10px;
      color: #252525;
      font-size: 18px;
      font-family: "Press Start 2P", system-ui;
    }

    my-item .delete-button {
      background-color: #5776ff;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    my-item .delete-button:hover {
      background-color: #0004ff;
    }

    .create-party-button {
      margin-top: 20px;
      text-align: center;
    }

    .create-party-button button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #5776ff;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-family: "Press Start 2P", system-ui;
    }

    .create-party-button button:hover {
      background-color: #0004ff;
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

  constructor() {
    super();
    this.items = [];
    this.userInput = ''; 
  }

  addItem() {
    const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];

    const item = {
      id: randomNumber,
      title: "Cool",
      content: this.userInput, 
      coolness: "added"
    }
    this.items = [...this.items, item];
    this.userInput = ''; // Clear user input after adding user
    this.requestUpdate();
  }

  deleteUser(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.requestUpdate();
  }

  handleInputChange(event) {
    this.userInput = event.target.value.slice(0, 10); // Limit input to 10 characters
  }

  renderCreatePartyButton() {
    if (this.items.length >= 2) {
      return html`
        <div class="create-party-button">
          <button @click="${this.createParty}">Create Party</button>
        </div>
      `;
    } else {
      return html``;
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
      <div class="user-list-container">
        <div class="user-input-container">
          <input type="text" placeholder="Enter Username" .value="${this.userInput}" @input="${this.handleInputChange}">
          <button @click="${this.addItem}" ?disabled="${this.userInput.length === 0 || this.userInput.length > 10}">Add user</button>
        </div>
        <div class="user-list">
          ${this.items.map((item) => html`
            <my-item data-id="${item.id}">
              <rpg-character sprite="${item.sprite}" .animate="${true}"></rpg-character>
              <div class="content">
                <strong>${item.content}</strong>
                ${item.coolness}
              </div>
              <button class="delete-button" @click="${() => this.deleteUser(item.id)}">Delete</button>
            </my-item>
          `)}
        </div>
        ${this.renderCreatePartyButton()}
      </div>
      <confetti-container id="confetti"></confetti-container>
      <DDD></DDD>
    `;
  }
}

globalThis.customElements.define('example-event', ExampleEvent);