const pic = document.getElementById("picture");
const title_container = document.getElementById("reddit-title");
const timer_disp = document.getElementById("timer");
let subreddit_list = ["cats", "dogpictures", "earthporn", "spaceporn", "roomporn", "mostbeautiful", "Awwducational"];
let timer = 0; // in seconds
let attempts = 10;
document.getElementById("reset").onclick = function() {
    if(attempts>0) {
        getRedditData();
        attempts -=1;
        timer_disp.textContent = `Attempts: ${attempts}  Time: 00:00`;
        if (attempts == 0) {
            timer = 3600;
            startTimer(timer, timer_disp);
        }
    }
    else {
        errorMsg = "You have reached your content limit."
        title_container.innerHTML = `<p style="font: normal normal bold 14px/16px Roboto, sans-serif; color:#FF0000">${errorMsg}</p>`;
    }
};
function startTimer(duration, display) {
    var intTimer = duration, minutes, seconds;
    let myVar = setInterval(function () {
        minutes = parseInt(intTimer / 60, 10)
        seconds = parseInt(intTimer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `Attempts: ${attempts}  Time: ${minutes}:${seconds}`;

        if (--intTimer < 0) {
            intTimer = 0;
            attempts = 10;
            clearInterval(myVar);
            display.textContent = `Attempts: ${attempts}  Time: 00:00`;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
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
    title_container.innerHTML = `<p style="font: normal normal bold 14px/16px Roboto, sans-serif;">${title}</p>`;
    //pic.innerHTML= `<img src=${thumbnail} width="${thumbnail_width}" height="${thumbnail_height}" style="border-radius:50%;width:203px;height:203px;filter:drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));">`;
    pic.innerHTML= `<img src=${thumbnail} width="${thumbnail_width}" height="${thumbnail_height}" style= "border-radius:5%;width:250px;height:250px;filter:drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));">`;
    // if (typeof animated_thumbnail !== 'undefined') {
    //     ul.innerHTML+= `<img src=${animated_thumbnail} alt = "this doesn't work" width=250/>`;
    // }
}