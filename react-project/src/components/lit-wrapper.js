import { createComponent } from '@lit-labs/react';
import React from 'react';
import { MyButton, MyComponent } from '../../../lit-project/src/index.js'; // 🛠 Sửa đường dẫn

export const MyButtonReact = createComponent({
	react: React,
	tagName: 'my-button',
	elementClass: MyButton,
});
export const MyComponentReact = createComponent({
	react: React,
	tagName: 'my-component',
	elementClass: MyComponent,
});
