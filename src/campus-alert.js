import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

    static get tag() {
      return 'campus-alert';
    }
    constructor() {
        super();
        this.title = "Campus Alert";
        this.counter = 0;
        this.min = "";
        this.max = "";
      }
}