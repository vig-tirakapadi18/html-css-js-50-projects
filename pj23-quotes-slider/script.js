const quotes = [{
    name: "Marcus Aurelius",
    photoUrl: "https://cdn.britannica.com/67/148167-050-F596E6F2/Marcus-Aurelius-statue-Rome-Piazza-del-Campidoglio.jpg?w=400&h=300&c=crop",
    text: `"You have power over your mind, not the      outside events. Realise this and you will find strength."`
},
{
    name: "Marcus Aurelius",
    photoUrl: "https://smarthistory.org/wp-content/uploads/2022/08/51013875435_73b330db57_k.jpg",
    text: `"Be tolerant with others, and strict with yourself."`
},
{
    name: "Seneca",
    photoUrl: "https://classicalwisdom.com/wp-content/uploads/2019/10/Seneca-1.jpg",
    text: `"We suffer more in imagination than in reality."`
},
{
    name: "Epictitus",
    photoUrl: "https://www.esschubert.com/wp-content/uploads/ESSchubert_Epictitus_1-1030x1030.jpg",
    text: `"No man is free who is not master of himself."`
}];

const imgEl = document.querySelector("img");
const paragraphEl = document.querySelector("p");
const nameEl = document.querySelector("h3");

let idx = 0;

const updateQuote = () => {
    const { name, photoUrl, text } = quotes[idx];
    imgEl.src = photoUrl;
    paragraphEl.innerText = text;
    nameEl.innerText = name;
    idx++;

    if (idx === quotes.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateQuote();
    }, 10000);
};

updateQuote();