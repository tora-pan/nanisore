import { LitElement, css, html } from "lit";

/** Popup */
export class Popup extends LitElement {
  override render() {
    return html`
      <main>
        <h3>Popup Page!</h3>

        <h6>v 0.0.0</h6>

        <slot></slot>
      </main>
    `;
  }

  static override styles = css`
    :root {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
    }

    /* :global(body) {
      min-width: 20rem;
    } */

    main {
      margin: 0 auto;
      padding: 1em;
      text-align: center;
    }

    h3 {
      color: #35f;
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 1.2rem;
      margin: 2rem auto;
      text-transform: uppercase;
    }

    h6 {
      color: #333;
      font-size: 0.5rem;
      margin: 0.5rem;
    }

    a {
      color: #ccc;
      font-size: 0.5rem;
      margin: 0.5rem;
      text-decoration: none;
    }

    @media (min-width: 480px) {
      h3 {
        max-width: none;
      }
    }
  `;
}

customElements.define("popup-window", Popup);

// declare global {
//   interface HTMLElementTagNameMap {
//     popup: Popup;
//   }
// }
