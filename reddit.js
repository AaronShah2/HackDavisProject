var snoowrap = require('snoowrap');
const ul = document.getElementById("picture");
const r = new snoowrap({
    userAgent: 'JavaScript image retrieval app',
    clientId: 'XrEOVyB5Ra6jJA',
    clientSecret: 'ySBaWF7k_IXIrgfCPe2IosbKjWmn2Qx',
    username: 'QuadSquad776',
    password: '4444quadsquad'
  });
append(createNode(ul), r.getSubreddit('gifs'));
function createNode(element){
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el)
}