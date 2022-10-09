let meme = document.getElementById("meme");
let title = document.getElementById("title");
let genMemeBtn = document.getElementById("generate-meme-btn");
let url = "https://meme-api.herokuapp.com/gimme/";

let subreddits = ["catmemes","wholesomememes","dogmemes",
    "me_irl"];

let getMeme = () => {
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    fetch(url+randomSubreddit)
    .then(res => res.json())
    .then(data => {
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src = data.url;
    })
};

genMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
