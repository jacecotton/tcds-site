import { WebComponent } from "@txch/tcds";

class ClickCounter extends WebComponent(HTMLElement) {
  connectedCallback() {
    this.state.count = 0;
  }

  render() {
    return `
      <button>Clicked ${this.state.count} times</button>
    `;
  }

  mountedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.state.count++;
    });
  }
}

customElements.define("click-counter", ClickCounter);