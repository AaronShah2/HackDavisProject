const { url } = require('inspector');
var snoowrap = require('snoowrap');
const ul = document.getElementById("picture");
const r = new snoowrap({
    userAgent: 'JavaScript image retrieval app',
    clientId: 'XrEOVyB5Ra6jJA',
    clientSecret: 'ySBaWF7k_IXIrgfCPe2IosbKjWmn2Qx',
    username: 'QuadSquad776',
    password: '4444quadsquad'
});
// append(createNode(ul), r.getSubreddit('gifs'));
document.getElementById("reset").onclick = function() {getRedditData()};

let subreddit_list = ["cats", "dogpictures", "earthporn", "spaceporn", "roomporn", "mostbeautiful"];
function createNode(element){
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el)
}
async function getRedditData() {
    // retrives data from random subreddit
    const randSubIndex = Math.floor(Math.random() * subreddit_list.length);
    let randSub = subreddit_list[randSubIndex];
    subreddit_url = `https://www.reddit.com/r/${randSub}/new.json`;
    const response = await fetch(subreddit_url);
    const data = await response.json();

    // using for testing purposes
    const elems = data.data.children;
    const randIndex = Math.floor(Math.random() * elems.length);
    let randElem = elems[randIndex].data;
    // randdata's key info
    let title = randElem.title;
    let thumbnail = randElem.thumbnail;
    let thumbnail_height = randElem.thumbnail_height;
    let thumbnail_width = randElem.thumbnail_width;
    let animated_thumbnail = randElem.url_overridden_by_dest
    ul.innerHTML = `<p>${title}</p>`;
    ul.innerHTML+= `<img src=${thumbnail} width="${thumbnail_width}" height="${thumbnail_height}">`;
    // if (typeof animated_thumbnail !== 'undefined') {
    //     ul.innerHTML+= `<img src=${animated_thumbnail} alt = "this doesn't work" width=250/>`;
    // }
}