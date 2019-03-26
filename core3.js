function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

// example
var newEl = document.createElement('div');
newEl.id = "bookmarklet-root";

var ref = document.querySelector('div.ddb-campaigns-detail-header');

insertAfter(newEl, ref);


document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/dsgepers/dndbeyond-bookmarklets/build/static/js/main.77d65c95.chunk.js?' + Math.random();