const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=b1d5743ecc3237377fe6ff44e624b507298607f8")
    data = await response.json()

    for(let i=0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }

}

getEmoji()



btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode
});