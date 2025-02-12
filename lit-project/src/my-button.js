import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {
	static styles = css`
		button {
			background: blue;
			color: white;
			padding: 10px 20px;
			border: none;
			cursor: pointer;
		}
	`;

	render() {
		return html`<button @click="${this._handleClick}">Click Me</button>`;
	}

	_handleClick() {
		alert('Button Clicked!');
	}
}

customElements.define('my-button', MyButton);
