const inputEl = document.querySelector('.word-input');
const infoTextEl = document.getElementById('info-text');
const meaningContainerEl = document.querySelector('.meaning-container');
const wordTitleEl = document.querySelector('.word');
const meaningEl = document.querySelector('.meaning');
const audioEl = document.getElementById('audio');

const fetchData = async (word) => {
        try {
                infoTextEl.style.display = "block";
                meaningContainerEl.style.display = 'none';
                infoTextEl.innerText = `Searching the meaning of "${word}"`;

                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
                const result = await fetch(url).then(resp => resp.json())

                if (result.title) {
                        alert(result.title);
                        meaningContainerEl.style.display = 'block';
                        infoTextEl.style.display = 'none';
                        wordTitleEl.innerText = word;
                        meaningEl.innerText = 'N/A';
                        audioEl.style.display = 'none';
                } else {
                        infoTextEl.style.display = "none";
                        meaningContainerEl.style.display = 'block';
                        audioEl.style.display = 'inline-flex';
                        wordTitleEl.innerText = result[0].word;
                        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
                        audioEl.src = result[0].phonetics[0].audio;
                }
        } catch (err) {
                infoTextEl.innerText = 'An error occurred. Please try again!'
                infoTextEl.style.color = '#e11d48';
        }
}

inputEl.addEventListener('keyup', (event) => {
        if (event.target.value && event.key === 'Enter') {
                fetchData(event.target.value);
        }
})