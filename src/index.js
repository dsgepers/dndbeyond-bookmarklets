import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


console.log("---- Running ----");

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

// example
var newEl = document.createElement('div');
newEl.id = "bookmarklet-root";

var ref = document.querySelector('div.ddb-campaigns-detail-header');

insertAfter(newEl, ref);

console.log("---- Running ----");
console.log(document.getElementById('bookmarklet-root'));
ReactDOM.render(<App />, document.getElementById('bookmarklet-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
