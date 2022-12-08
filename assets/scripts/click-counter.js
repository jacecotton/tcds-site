import { WebComponent } from "@txch/tcds";

class ClickCounter extends WebComponent(HTMLElement) {
  connected() {
    this.state.count = 0;
  }

  render() {
    return `
      <button>Clicked ${this.state.count} times</button>
    `;
  }

  mounted() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.state.count++;
    });
  }
}

customElements.define("click-counter", ClickCounter);