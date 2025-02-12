import { LitElement, html, css } from 'lit';

export class MyComponent extends LitElement {
	static styles = css`
		:host {
			display: block;
			padding: 16px;
			color: blue;
		}
	`;

	render() {
		return html`<h1>Hello from Lit!</h1>`;
	}
}

customElements.define('my-component', MyComponent);
