import { html, render } from "/lib/preact.js";
import App from '/pages/message.js';

render(html` <${App} type="404"/> `, document.body);
