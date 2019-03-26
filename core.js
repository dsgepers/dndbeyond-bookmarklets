function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

// example
var newEl = document.createElement('div');
newEl.innerHTML = '<p>Hello World!</p>';

var ref = document.querySelector('div.ddb-campaigns-detail-header');

insertAfter(newEl, ref);