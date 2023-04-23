const buttonEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

const fetchEmoji = async () => {
    let resp = await fetch(("https://emoji-api.com/emojis?access_key=4e081b50370f712412fa3c04a5bb7affad38adbb"));
    const data = await resp.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            char: data[i].character,
            name: data[i].unicodeName
        })
    }
};

fetchEmoji();

buttonEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    buttonEl.innerText = emoji[randomNum].char;
    emojiNameEl.innerText = emoji[randomNum].name;
});
