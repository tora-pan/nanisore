import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/** Options */
@customElement("options")
export class Options extends LitElement {
  @property()
  override render() {
    return html`
      <main>
        <h3>Options Page!</h3>

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

    :global(body) {
      min-width: 20rem;
    }

    main {
      text-align: center;
      padding: 1em;
      margin: 0 auto;
    }

    h3 {
      color: #3355ff;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 1.2rem;
      margin: 2rem auto;
    }

    h6 {
      font-size: 0.5rem;
      color: #333333;
      margin: 0.5rem;
    }

    a {
      font-size: 0.5rem;
      margin: 0.5rem;
      color: #cccccc;
      text-decoration: none;
    }

    @media (min-width: 480px) {
      h3 {
        max-width: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    options: Options;
  }
}
